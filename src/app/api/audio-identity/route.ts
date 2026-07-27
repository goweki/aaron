import { NextRequest, NextResponse } from "next/server";
import { extractFingerprints } from "@/lib/audio/fingerprint";
import { matchFingerprints } from "@/lib/audio/matcher";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("audio") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No audio sample provided" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // 1. Extract fingerprints from query snippet
    const queryFingerprints = await extractFingerprints(buffer);

    // 2. Perform DB lookup & histogram matching
    const result = await matchFingerprints(queryFingerprints);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Identification error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
