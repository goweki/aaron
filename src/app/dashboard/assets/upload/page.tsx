"use client";

import { useState } from "react";
import {
  Upload,
  FileAudio,
  CheckCircle2,
  AlertCircle,
  Fingerprint,
  Waves,
  Loader2,
} from "lucide-react";

export default function UploadAssetPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [enableWatermark, setEnableWatermark] = useState(true);
  const [watermarkPayload, setWatermarkPayload] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      if (!title) setTitle(selected.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return;

    setLoading(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("artist", artist);
      formData.append("album", album);
      // Hardcoded ownerId for demo; replace with your auth session user ID
      formData.append("ownerId", "00000000-0000-0000-0000-000000000000");

      if (enableWatermark) {
        formData.append("watermarkPayload", watermarkPayload || title);
      }

      const res = await fetch("/api/index-track", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Upload failed.");

      setStatus({
        type: "success",
        message: `Asset uploaded & fingerprinted! Indexed ${data.data.fingerprintsCount} landmark hashes.`,
      });

      // Reset form
      setFile(null);
      setTitle("");
      setArtist("");
      setAlbum("");
    } catch (err: any) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Upload & Fingerprint Asset
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Upload an audio file to generate landmark fingerprints and embed
          optional audio watermarking.
        </p>
      </div>

      {status && (
        <div
          className={`p-4 rounded-lg flex items-center gap-3 border text-sm font-medium ${
            status.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Drag/Drop Zone */}
        <div className="border-2 border-dashed border-slate-200 hover:border-slate-400 transition-colors rounded-xl p-8 text-center bg-slate-50/50">
          <input
            type="file"
            id="audio-upload"
            accept="audio/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="audio-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <FileAudio className="w-12 h-12 text-slate-400 mb-3" />
            <span className="text-sm font-medium text-slate-700">
              {file ? file.name : "Click to upload or drag & drop audio track"}
            </span>
            <span className="text-xs text-slate-500 mt-1">
              MP3, WAV, FLAC, or AAC up to 50MB
            </span>
          </label>
        </div>

        {/* Metadata Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">
              Track Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Summer Vibe"
              className="w-full px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Artist</label>
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="e.g., AWOL"
              className="w-full px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Feature Switches */}
        <div className="border rounded-xl p-4 bg-white space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Fingerprint className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Landmark Fingerprinting
                </p>
                <p className="text-xs text-slate-500">
                  Extracts Shazam-style hcodes/tcodes into PostgreSQL
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
              Enabled
            </span>
          </div>

          <hr className="border-slate-100" />

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Inaudible Watermarking
                </p>
                <p className="text-xs text-slate-500">
                  Embeds an encoded payload into audio spectrum
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={enableWatermark}
              onChange={(e) => setEnableWatermark(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>

          {enableWatermark && (
            <div className="mt-3 pl-11">
              <input
                type="text"
                value={watermarkPayload}
                onChange={(e) => setWatermarkPayload(e.target.value)}
                placeholder="Custom Payload String (e.g. USER-ISRC-9982)"
                className="w-full px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !file}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition flex items-center justify-center gap-2 disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing & Fingerprinting...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              Upload & Process Track
            </>
          )}
        </button>
      </form>
    </div>
  );
}
