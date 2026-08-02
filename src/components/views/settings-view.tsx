"use client";

import { useState, useTransition } from "react";
import { Key, ShieldCheck, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import {
  generateApiKeyAction,
  revokeApiKeyAction,
} from "@/actions/dashboard-actions/settings-actions";
import { Button } from "@/components/ui/button";

export default function SettingsView({
  currentUser,
}: {
  currentUser: {
    id: string;
    email: string;
    name: string;
    role: string;
    apiKeyHash: string | null;
  };
}) {
  const [apiKey, setApiKey] = useState("");
  const [isPending, startTransition] = useTransition();

  const createKey = () => {
    startTransition(async () => {
      const res = await generateApiKeyAction();
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setApiKey(res.data.apiKey);
      toast.success("API key generated. Copy it now.");
    });
  };

  const revokeKey = () => {
    startTransition(async () => {
      const res = await revokeApiKeyAction();
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setApiKey("");
      toast.success("API key revoked.");
    });
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">API Key Management</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Generate or revoke your API key for authenticated endpoints.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium">Current Key Status</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {currentUser.apiKeyHash ? "Configured" : "Not configured"}
            </p>
          </div>
          {apiKey ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 dark:border-emerald-950/40 dark:bg-emerald-950/20 dark:text-emerald-300">
              <p className="font-medium">Your new API key</p>
              <p className="break-all font-mono mt-2">{apiKey}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                This value will be shown only once.
              </p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={createKey}
              disabled={isPending}
              className="inline-flex items-center gap-2"
            >
              {isPending ? <Loader2 className="animate-spin" /> : <Key />}
              Generate API Key
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={revokeKey}
              disabled={isPending || !currentUser.apiKeyHash}
            >
              Revoke API Key
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-lg font-semibold">Account Details</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-xs text-slate-500">Name</p>
            <p className="font-medium mt-1">{currentUser.name}</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-xs text-slate-500">Email</p>
            <p className="font-medium mt-1">{currentUser.email}</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-xs text-slate-500">Role</p>
            <p className="font-medium mt-1">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
