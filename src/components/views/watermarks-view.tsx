"use client";

import { useState, useTransition } from "react";
import { Waves, Shield, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { embedWatermarkAction } from "@/actions/dashboard-actions/watermark-actions";
import { Prisma } from "@/lib/prisma/generated";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WatermarksView({
  watermarks,
}: {
  watermarks: Prisma.WatermarkGetPayload<{ include: { asset: true } }>[];
}) {
  const [payload, setPayload] = useState("");
  const [assetId, setAssetId] = useState("");
  const [isPending, startTransition] = useTransition();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!assetId.trim() || !payload.trim()) {
      toast.error("Asset and payload are required.");
      return;
    }

    startTransition(async () => {
      const result = await embedWatermarkAction({
        assetId: assetId.trim(),
        payload: payload.trim(),
      });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }

      toast.success("Watermark embedding triggered.");
      setPayload("");
    });
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-lg font-semibold">Embed Watermark</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Register a watermark payload and persist the artifact on the server.
        </p>
        <form onSubmit={submit} className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="watermark-asset">Asset ID</Label>
            <Input
              id="watermark-asset"
              value={assetId}
              onChange={(event) => setAssetId(event.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="watermark-payload">Payload</Label>
            <Input
              id="watermark-payload"
              value={payload}
              onChange={(event) => setPayload(event.target.value)}
            />
          </div>
          <div className="md:col-span-3 text-right">
            <Button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2"
            >
              {isPending ? <Loader2 className="animate-spin" /> : <Waves />}
              Embed Watermark
            </Button>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-medium">
              <tr>
                <th className="px-4 py-3">Asset</th>
                <th className="px-4 py-3">Payload</th>
                <th className="px-4 py-3">Algorithm</th>
                <th className="px-4 py-3">Embedded At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {watermarks.map((watermark) => (
                <tr
                  key={watermark.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                    {watermark.asset.title}
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 break-all">
                    {watermark.payload}
                  </td>
                  <td className="px-4 py-3">{watermark.algorithm}</td>
                  <td className="px-4 py-3">
                    {new Date(watermark.embeddedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
