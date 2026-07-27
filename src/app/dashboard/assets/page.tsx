"use client";

import { useEffect, useState } from "react";
import { Music, Fingerprint, Waves, ShieldCheck, Loader2 } from "lucide-react";

interface Asset {
  id: string;
  title: string;
  artist: string | null;
  status: string;
  type: string;
  createdAt: string;
  fingerprint?: {
    algorithm: string;
    version: string;
  };
  _count?: {
    hashes: number;
    detections: number;
  };
}

export default function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const res = await fetch("/api/assets"); // Endpoint fetching assets from Prisma
        if (res.ok) {
          const data = await res.json();
          setAssets(data.assets || []);
        }
      } catch (err) {
        console.error("Failed to load assets", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAssets();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Audio Catalog
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your cataloged assets, fingerprint indices, and detection
            logs.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center flex flex-col items-center justify-center gap-2 text-slate-500">
          <Loader2 className="w-6 h-6 animate-spin text-indigo-600" />
          <span className="text-sm">Loading catalog assets...</span>
        </div>
      ) : assets.length === 0 ? (
        <div className="border rounded-xl p-12 text-center bg-slate-50">
          <Music className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-700 font-medium">No assets found</p>
          <p className="text-xs text-slate-500 mt-1">
            Upload an audio file to start building your fingerprint index.
          </p>
        </div>
      ) : (
        <div className="border rounded-xl overflow-hidden bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b text-slate-600 font-medium">
              <tr>
                <th className="py-3 px-4">Title & Artist</th>
                <th className="py-3 px-4">Fingerprint Engine</th>
                <th className="py-3 px-4">Indexed Hashes</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {assets.map((asset) => (
                <tr
                  key={asset.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        <Music className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {asset.title}
                        </p>
                        <p className="text-xs text-slate-500">
                          {asset.artist || "Unknown Artist"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Fingerprint className="w-4 h-4 text-indigo-500" />
                      <span>
                        {asset.fingerprint?.algorithm || "landmark"} v
                        {asset.fingerprint?.version || "1.0.4"}
                      </span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                    {asset._count?.hashes
                      ? asset._count.hashes.toLocaleString()
                      : "—"}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <ShieldCheck className="w-3 h-3" /> {asset.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-xs text-slate-500">
                    {new Date(asset.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
