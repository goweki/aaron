import { prisma } from "@/lib/prisma"; // Adjust path to match your Prisma client export
import { AudioFingerprintSample } from "./fingerprint";

export interface MatchResult {
  assetId: string | null;
  confidence: number;
  startOffset?: number; // In seconds
  endOffset?: number; // In seconds
}

/**
 * Matches a list of sample fingerprints against stored landmark hashes in the database.
 * Uses Time Delta Alignment Scoring to filter noise and identify true matches.
 *
 * @param queryFingerprints Array of extracted sample landmarks
 * @param minConfidence Minimum aligned count threshold required for a valid match (default: 10)
 */
export async function matchFingerprints(
  queryFingerprints: AudioFingerprintSample[],
  minConfidence: number = 10,
): Promise<MatchResult> {
  if (queryFingerprints.length === 0) {
    return { assetId: null, confidence: 0 };
  }

  // 1. Extract unique hcodes from sample and convert to BigInt for Prisma query
  const sampleHashes = Array.from(
    new Set(queryFingerprints.map((f) => BigInt(f.hcode))),
  );

  // 2. Query covered B-Tree index for matching hashes in database
  const dbMatches = await prisma.fingerprintHash.findMany({
    where: {
      hash: { in: sampleHashes },
    },
    select: {
      assetId: true,
      offsetMs: true,
      hash: true,
    },
  });

  if (dbMatches.length === 0) {
    return { assetId: null, confidence: 0 };
  }

  // 3. Map sample hcodes to their respective sample tcodes
  const sampleMap = new Map<number, number[]>();
  for (const sf of queryFingerprints) {
    const list = sampleMap.get(sf.hcode) || [];
    list.push(sf.tcode);
    sampleMap.set(sf.hcode, list);
  }

  // 4. Calculate Time Delta Alignment Histogram
  const histogram = new Map<string, number>(); // Key: `${assetId}:${deltaT}`
  const assetScores = new Map<
    string,
    { maxScore: number; bestDeltaT: number }
  >();

  for (const dbMatch of dbMatches) {
    const hashAsNum = Number(dbMatch.hash);
    const sampleTcodes = sampleMap.get(hashAsNum) || [];

    for (const sampleTcode of sampleTcodes) {
      // Relative offset between full song position and query snippet position
      const deltaT = dbMatch.offsetMs - sampleTcode;
      const key = `${dbMatch.assetId}:${deltaT}`;

      const count = (histogram.get(key) || 0) + 1;
      histogram.set(key, count);

      const currentScore = assetScores.get(dbMatch.assetId) || {
        maxScore: 0,
        bestDeltaT: 0,
      };

      if (count > currentScore.maxScore) {
        assetScores.set(dbMatch.assetId, {
          maxScore: count,
          bestDeltaT: deltaT,
        });
      }
    }
  }

  // 5. Select asset with maximum aligned landmark hashes
  let bestAssetId: string | null = null;
  let highestScore = 0;
  let bestDeltaT = 0;

  for (const [
    assetId,
    { maxScore, bestDeltaT: delta },
  ] of assetScores.entries()) {
    if (maxScore > highestScore) {
      highestScore = maxScore;
      bestAssetId = assetId;
      bestDeltaT = delta;
    }
  }

  // 6. Return match if alignment score meets confidence threshold
  if (bestAssetId && highestScore >= minConfidence) {
    const sampleDurationMs =
      queryFingerprints[queryFingerprints.length - 1].tcode -
      queryFingerprints[0].tcode;

    return {
      assetId: bestAssetId,
      confidence: highestScore,
      startOffset: Math.max(0, bestDeltaT / 1000), // convert ms to seconds
      endOffset: (bestDeltaT + sampleDurationMs) / 1000,
    };
  }

  return { assetId: null, confidence: highestScore };
}
