"use client";

import { useTransition, useState } from "react";
import {
  Music,
  CheckCircle2,
  XCircle,
  Clock,
  Radio,
  Loader2,
} from "lucide-react";
import { updateDetectionStatusAction } from "@/actions/dashboard-actions/detection-actions";
import { DetectionWithRelations } from "@/actions/dashboard-actions/dashboard-types";
import { DetectionStatus } from "@/lib/prisma/generated";
import toast from "react-hot-toast";

export default function DetectionsView({
  detections,
}: {
  detections: DetectionWithRelations[];
}) {
  const [isPending, startTransition] = useTransition();
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleUpdateStatus = (
    detectionId: string,
    targetStatus: DetectionStatus,
  ) => {
    setActiveItemId(detectionId);
    startTransition(async () => {
      try {
        const res = await updateDetectionStatusAction(
          detectionId,
          targetStatus,
        );
        if (!res.ok) {
          toast.error(res.error || "Failed to update detection status");
        } else {
          toast.success(`Detection status updated to ${targetStatus}`);
        }
      } catch (err: any) {
        toast.error(err.message || "An unexpected error occurred");
      } finally {
        setActiveItemId(null);
      }
    });
  };

  return (
    <>
      {/* Table */}
      {detections.length === 0 ? (
        <div className="border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl p-12 text-center bg-slate-50/50 dark:bg-slate-900/50">
          <Radio className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            No detections logged yet
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            As live stream monitoring sessions process broadcast audio, matched
            fingerprints will appear here.
          </p>
        </div>
      ) : (
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                <tr>
                  <th className="py-3 px-4">Detected Asset</th>
                  <th className="py-3 px-4">Broadcaster</th>
                  <th className="py-3 px-4">Match Confidence</th>
                  <th className="py-3 px-4">Broadcast Time</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {detections.map((item) => {
                  const isItemLoading = isPending && activeItemId === item.id;

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors"
                    >
                      {/* Asset Info */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0">
                            <Music className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">
                              {item.asset.title}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {item.asset.artist || "Unknown Artist"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Broadcaster Info */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <Radio className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="font-medium text-slate-800 dark:text-slate-200">
                            {item.broadcaster.name}
                          </span>
                        </div>
                        {item.broadcaster.frequency && (
                          <span className="text-xs text-slate-500 font-mono ml-5">
                            {item.broadcaster.frequency}
                          </span>
                        )}
                      </td>

                      {/* Score / Confidence */}
                      <td className="py-3.5 px-4">
                        <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          {item.confidence.toFixed(1)} aligned hashes
                        </span>
                        {item.duration && (
                          <p className="text-xs text-slate-500">
                            Duration: {item.duration.toFixed(1)}s
                          </p>
                        )}
                      </td>

                      {/* Broadcast Timestamp */}
                      <td className="py-3.5 px-4 text-xs text-slate-600 dark:text-slate-400">
                        {new Date(item.broadcastAt).toLocaleString()}
                      </td>

                      {/* Status Pill */}
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            item.status === "VERIFIED"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                              : item.status === "REJECTED"
                                ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800"
                                : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"
                          }`}
                        >
                          {item.status === "VERIFIED" && (
                            <CheckCircle2 className="w-3 h-3" />
                          )}
                          {item.status === "REJECTED" && (
                            <XCircle className="w-3 h-3" />
                          )}
                          {item.status === "PENDING" && (
                            <Clock className="w-3 h-3" />
                          )}
                          {item.status}
                        </span>
                      </td>

                      {/* Verification Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {item.status !== "VERIFIED" && (
                            <button
                              type="button"
                              disabled={isPending}
                              onClick={() =>
                                handleUpdateStatus(item.id, "VERIFIED")
                              }
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition disabled:opacity-50"
                            >
                              {isItemLoading ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                              ) : null}
                              Approve
                            </button>
                          )}
                          {item.status !== "REJECTED" && (
                            <button
                              type="button"
                              disabled={isPending}
                              onClick={() =>
                                handleUpdateStatus(item.id, "REJECTED")
                              }
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-red-50 hover:text-red-600 dark:bg-slate-800 dark:hover:bg-red-950/30 rounded-md transition disabled:opacity-50"
                            >
                              {isItemLoading ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                              ) : null}
                              Reject
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
