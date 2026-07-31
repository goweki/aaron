"use client";

import Link from "next/link";
import {
  Music,
  Plus,
  Fingerprint,
  Waves,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
  Radio,
} from "lucide-react";
import {
  deleteAssetAction,
  toggleAssetStatusAction,
} from "@/actions/dashboard-actions/asset-actions";
import { AssetWithRelations } from "@/actions/dashboard-actions/dashboard-types";
import toast from "react-hot-toast";

export default function AssetsView({
  assets,
}: {
  assets: AssetWithRelations[];
}) {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Audio & Media Catalog
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage your registered tracks, inspect fingerprint indices, and view
            detection metrics.
          </p>
        </div>

        <Link
          href="/dashboard/assets/upload"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow transition"
        >
          <Plus className="w-4 h-4" />
          Upload & Index Track
        </Link>
      </div>

      {/* Catalog Table */}
      {assets.length === 0 ? (
        <div className="border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl p-12 text-center bg-slate-50/50 dark:bg-slate-900/50">
          <Music className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            No assets cataloged yet
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
            Upload an audio track to generate landmark fingerprints and enable
            radio detection.
          </p>
          <Link
            href="/dashboard/assets/upload"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow transition"
          >
            <Plus className="w-4 h-4" />
            Upload Your First Track
          </Link>
        </div>
      ) : (
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                <tr>
                  <th className="py-3 px-4">Title & Artist</th>
                  <th className="py-3 px-4">Type / ISRC</th>
                  <th className="py-3 px-4">Fingerprint Index</th>
                  <th className="py-3 px-4">Watermark</th>
                  <th className="py-3 px-4">Detections</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {assets.map((asset) => (
                  <tr
                    key={asset.id}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors"
                  >
                    {/* Track Info */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0">
                          <Music className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">
                            {asset.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {asset.artist || "Unknown Artist"}{" "}
                            {asset.album ? `• ${asset.album}` : ""}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Metadata */}
                    <td className="py-3.5 px-4">
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {asset.type}
                      </span>
                      <p className="text-xs text-slate-500 font-mono mt-1">
                        {asset.isrc || "No ISRC"}
                      </p>
                    </td>

                    {/* Fingerprint State */}
                    <td className="py-3.5 px-4">
                      {asset.fingerprint ? (
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <Fingerprint className="w-3.5 h-3.5 text-indigo-500" />
                            <span>
                              {asset.fingerprint.algorithm} (v
                              {asset.fingerprint.version})
                            </span>
                          </div>
                          <p className="text-xs font-mono text-slate-500 pl-5">
                            {asset.hashes.length.toLocaleString()} hashes
                          </p>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded">
                          <Clock className="w-3 h-3" /> Pending Fingerprint
                        </span>
                      )}
                    </td>

                    {/* Watermark State */}
                    <td className="py-3.5 px-4">
                      {asset.watermark ? (
                        <span className="inline-flex items-center gap-1.5 text-xs text-purple-700 dark:text-purple-300 font-medium bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-800">
                          <Waves className="w-3.5 h-3.5 text-purple-500" />{" "}
                          Embedded
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 dark:text-slate-600">
                          —
                        </span>
                      )}
                    </td>

                    {/* Detections Count */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <Radio className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{asset.detections.length} logged</span>
                      </div>
                    </td>

                    {/* Status Toggle Button */}
                    <td className="py-3.5 px-4">
                      <form
                        action={async () => {
                          const res = await toggleAssetStatusAction(asset.id);
                          if (!res.ok) {
                            toast.error(res.error);
                          }
                        }}
                      >
                        <button
                          type="submit"
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border transition ${
                            asset.status === "ACTIVE"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                              : "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                          }`}
                        >
                          {asset.status === "ACTIVE" ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" /> Active
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3 h-3" /> Inactive
                            </>
                          )}
                        </button>
                      </form>
                    </td>

                    {/* Row Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <form
                        action={async () => {
                          const res = await deleteAssetAction(asset.id);
                          if (!res.ok) {
                            toast.error(res.error);
                          }
                        }}
                        className="inline-block"
                      >
                        <button
                          type="submit"
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition"
                          title="Delete Asset"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
