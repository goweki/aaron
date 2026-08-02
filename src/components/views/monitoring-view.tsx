"use client";

import { useState, useTransition } from "react";
import { Plus, Clock, Radio, Loader2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import {
  createMonitoringSessionAction,
  deleteMonitoringSessionAction,
} from "@/actions/dashboard-actions/monitoring-actions";
import { Prisma } from "@/lib/prisma/generated";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MonitoringView({
  sessions,
}: {
  sessions: Prisma.MonitoringSessionGetPayload<{
    include: { broadcaster: true; detections: true };
  }>[];
}) {
  const [broadcasterId, setBroadcasterId] = useState("");
  const [audioLink, setAudioLink] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [isPending, startTransition] = useTransition();

  const createSession = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!broadcasterId.trim() || !startedAt.trim()) {
      toast.error("Broadcaster and start time are required.");
      return;
    }

    startTransition(async () => {
      const result = await createMonitoringSessionAction({
        broadcasterId: broadcasterId.trim(),
        audioLink: audioLink.trim() || undefined,
        startedAt: new Date(startedAt),
      });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      toast.success("Monitoring session created.");
      setBroadcasterId("");
      setAudioLink("");
      setStartedAt("");
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this monitoring session?")) return;
    startTransition(async () => {
      const result = await deleteMonitoringSessionAction(id);
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      toast.success("Monitoring session deleted.");
    });
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-lg font-semibold">Create Monitoring Session</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Start a new monitoring session linked to a broadcaster and an optional
          stream URL.
        </p>
        <form onSubmit={createSession} className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="monitor-broadcaster">Broadcaster ID</Label>
            <Input
              id="monitor-broadcaster"
              value={broadcasterId}
              onChange={(event) => setBroadcasterId(event.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="monitor-time">Start Time</Label>
            <Input
              id="monitor-time"
              type="datetime-local"
              value={startedAt}
              onChange={(event) => setStartedAt(event.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="monitor-audio">Audio Source URL</Label>
            <Input
              id="monitor-audio"
              value={audioLink}
              onChange={(event) => setAudioLink(event.target.value)}
            />
          </div>
          <div className="md:col-span-4 text-right">
            <Button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2"
            >
              {isPending ? <Loader2 className="animate-spin" /> : <Plus />}
              Create Session
            </Button>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-medium">
              <tr>
                <th className="px-4 py-3">Broadcaster</th>
                <th className="px-4 py-3">Start Time</th>
                <th className="px-4 py-3">Audio Link</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {sessions.map((session) => (
                <tr
                  key={session.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  <td className="px-4 py-3">{session.broadcaster.name}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
                    {new Date(session.startedAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 break-all">
                    {session.audioLink || "—"}
                  </td>
                  <td className="px-4 py-3">{session.status}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleDelete(session.id)}
                      disabled={isPending}
                      className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
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
