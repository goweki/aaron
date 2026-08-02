"use client";

import { Clipboard, Fingerprint, Waves, Radio, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { AssetWithRelations } from "@/actions/dashboard-actions/dashboard-types";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AssetInspector({
  asset,
}: {
  asset: AssetWithRelations;
}) {
  const [showHashes, setShowHashes] = useState(false);
  const [isPending, startTransition] = useTransition();

  const copyAssetId = () => {
    navigator.clipboard.writeText(asset.id);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
            <Fingerprint className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Acoustic Fingerprint</h2>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Algorithm: {asset.fingerprint?.algorithm ?? "N/A"}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Version: {asset.fingerprint?.version ?? "N/A"}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hash count: {asset.hashes.length}
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-4"
            onClick={() => setShowHashes((current) => !current)}
          >
            {showHashes ? "Hide hashes" : "Reveal hashes"}
          </Button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
            <Waves className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Watermark</h2>
          </div>
          {asset.watermark ? (
            <>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                Payload: {asset.watermark.payload}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Algorithm: {asset.watermark.algorithm}
              </p>
            </>
          ) : (
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              No watermark payload registered for this asset.
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
            <Radio className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Detections</h2>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Total matches: {asset.detections.length}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Owner: {asset.owner.name} ({asset.owner.email})
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-4"
            onClick={copyAssetId}
          >
            <Clipboard className="w-4 h-4" /> Copy Asset ID
          </Button>
        </div>
      </div>

      {showHashes && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Landmark Hashes</h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Showing top 50
            </span>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {asset.hashes.slice(0, 50).map((hash) => (
              <div
                key={hash.id}
                className="rounded-xl border border-slate-200 p-3 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300"
              >
                <p>hash: {hash.hash.toString()}</p>
                <p>offset: {hash.offsetMs}ms</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
