"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import {
  Users,
  UserPlus,
  Shield,
  ShieldAlert,
  User,
  CheckCircle2,
  XCircle,
  Clock,
  Trash2,
  Phone,
  Mail,
  Key,
  Music,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

import { UserWithRelations } from "@/actions/dashboard-actions/dashboard-types";
import {
  toggleUserStatusAction,
  deleteUserAction,
} from "@/actions/dashboard-actions/user-actions";

export default function UsersView({ users }: { users: UserWithRelations[] }) {
  const [isPending, startTransition] = useTransition();
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const runAction = (
    id: string,
    action: (userId: string) => ReturnType<typeof toggleUserStatusAction>,
    successMessage: string,
  ) => {
    setActiveItemId(id);
    startTransition(async () => {
      try {
        const res = await action(id);
        if (!res.ok) {
          toast.error(res.error || "Operation failed");
        } else {
          toast.success(successMessage);
        }
      } catch {
        toast.error("Operation failed. Please try again.");
      } finally {
        setActiveItemId(null);
      }
    });
  };

  return (
    <div className="space-y-8">

      {/* Users Table / Empty State */}
      {users.length === 0 ? (
        <div className="border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl p-12 text-center bg-slate-50/50 dark:bg-slate-900/50">
          <Users className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            No registered users found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
            Get started by inviting or creating system operators and rights
            holders.
          </p>
          <Link
            href="/dashboard/users/create"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow transition"
          >
            <UserPlus className="w-4 h-4" />
            Add First User
          </Link>
        </div>
      ) : (
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                <tr>
                  <th className="py-3 px-4">User Details</th>
                  <th className="py-3 px-4">Contact Info</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">API Access</th>
                  <th className="py-3 px-4">Catalog Assets</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors"
                  >
                    {/* Name & Avatar */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        {user.image ? (
                          <img
                            src={user.image}
                            alt={user.name}
                            className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-800"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-semibold text-xs shrink-0 border border-indigo-100 dark:border-indigo-900">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">
                            {user.name}
                          </p>
                          <p className="text-xs text-slate-400 font-mono">
                            {user.id.slice(0, 8)}...
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Email & Phone */}
                    <td className="py-3.5 px-4 space-y-1">
                      {user.email && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>{user.email}</span>
                        </div>
                      )}
                      {user.phone && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>{user.phone}</span>
                        </div>
                      )}
                      {!user.email && !user.phone && (
                        <span className="text-xs text-slate-400 dark:text-slate-600">
                          —
                        </span>
                      )}
                    </td>

                    {/* System Role */}
                    <td className="py-3.5 px-4">
                      {user.role === "ADMINISTRATOR" && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800">
                          <ShieldAlert className="w-3 h-3" /> Admin
                        </span>
                      )}
                      {user.role === "SYSTEM" && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800">
                          <Shield className="w-3 h-3" /> System
                        </span>
                      )}
                      {user.role === "USER" && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                          <User className="w-3 h-3" /> User
                        </span>
                      )}
                    </td>

                    {/* API Key Status */}
                    <td className="py-3.5 px-4">
                      {user.apiKeyHash ? (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 dark:text-emerald-400">
                          <Key className="w-3 h-3 text-emerald-500" />{" "}
                          Configured
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 dark:text-slate-600">
                          —
                        </span>
                      )}
                    </td>

                    {/* Asset Count */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <Music className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{user.assets?.length ?? 0} tracks</span>
                      </div>
                    </td>

                    {/* Status Badge & Toggle */}
                    <td className="py-3.5 px-4">
                      <button
                          type="button"
                          disabled={isPending}
                          onClick={() =>
                            runAction(
                              user.id,
                              toggleUserStatusAction,
                              "User status updated",
                            )
                          }
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border transition disabled:opacity-50 ${
                            user.status === "ACTIVE"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                              : user.status === "PENDING"
                                ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"
                                : "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                          }`}
                        >
                          {isPending && activeItemId === user.id ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : user.status === "ACTIVE" ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" /> Active
                            </>
                          ) : user.status === "PENDING" ? (
                            <>
                              <Clock className="w-3 h-3" /> Pending
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3 h-3" /> Inactive
                            </>
                          )}
                      </button>
                    </td>

                    {/* Row Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <button
                          type="button"
                          disabled={isPending}
                          onClick={() =>
                            runAction(
                              user.id,
                              deleteUserAction,
                              "User deleted successfully",
                            )
                          }
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition disabled:opacity-50"
                          title="Delete User"
                        >
                          {isPending && activeItemId === user.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                      </button>
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
