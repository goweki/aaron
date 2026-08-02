"use client";

import { CheckCircle2, XCircle, Radio, Fingerprint, Waves } from "lucide-react";
import { DetectionWithRelations } from "@/actions/dashboard-actions/dashboard-types";

export default function DetectionInspector({
  detection,
}: {
  detection: DetectionWithRelations;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
            <Fingerprint className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Detected Asset</h2>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {detection.asset.title}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {detection.asset.artist || "Unknown Artist"}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Owner: {detection.asset.owner.name}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
            <Radio className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Broadcast Source</h2>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {detection.broadcaster.name}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {detection.broadcaster.streamUrl || "No stream configured"}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Detected: {new Date(detection.broadcastAt).toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <h2 className="text-lg font-semibold">Verification</h2>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Status: {detection.status}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Confidence: {detection.confidence.toFixed(1)} aligned hashes
          </p>
          {detection.duration ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Duration: {detection.duration}s
            </p>
          ) : null}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 mb-4">
          <Waves className="w-5 h-5 text-indigo-500" />
          <h2 className="text-lg font-semibold">
            Watermark & Fingerprint Reference
          </h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Asset watermark payload:{" "}
          {detection.asset.watermark?.payload || "None"}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Fingerprint algorithm:{" "}
          {detection.asset.fingerprint?.algorithm || "N/A"}
        </p>
      </div>
    </div>
  );
}
