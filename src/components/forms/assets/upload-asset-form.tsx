"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, FileAudio, Fingerprint, Loader2, Upload, Waves } from "lucide-react";
import toast from "react-hot-toast";
import { indexAssetAction } from "@/actions/dashboard-actions/asset-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UploadAssetForm() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [enableWatermark, setEnableWatermark] = useState(true);
  const [watermarkPayload, setWatermarkPayload] = useState("");
  const [isPending, startTransition] = useTransition();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file || !title.trim()) return;
    startTransition(async () => {
      const res = await indexAssetAction({
        file,
        title,
        artist,
        album,
        watermarkPayload: enableWatermark ? watermarkPayload || title : undefined,
      });
      if (!res.ok) {
        toast.error(res.error || "Asset indexing failed.");
        return;
      }
      toast.success(`Acoustic Fingerprint Index created with ${res.data.fingerprintsCount} aligned hashes.`);
      setFile(null); setTitle(""); setArtist(""); setAlbum(""); setWatermarkPayload("");
    });
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-8 text-center transition-colors hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-900/50">
        <Input id="audio-upload" type="file" accept="audio/*" required onChange={(event) => {
          const selected = event.target.files?.[0] ?? null;
          setFile(selected);
          if (selected && !title) setTitle(selected.name.replace(/\.[^/.]+$/, ""));
        }} />
        <Label htmlFor="audio-upload" className="mt-3 flex cursor-pointer flex-col items-center gap-2">
          <FileAudio className="size-10 text-indigo-500" />
          <span className="font-medium text-slate-700 dark:text-slate-200">{file?.name || "Select an audio track"}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">MP3, WAV, FLAC, or AAC</span>
        </Label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2"><Label htmlFor="title">Track title</Label><Input id="title" required value={title} onChange={(event) => setTitle(event.target.value)} /></div>
        <div className="space-y-2"><Label htmlFor="artist">Artist</Label><Input id="artist" value={artist} onChange={(event) => setArtist(event.target.value)} /></div>
        <div className="space-y-2 md:col-span-2"><Label htmlFor="album">Album</Label><Input id="album" value={album} onChange={(event) => setAlbum(event.target.value)} /></div>
      </div>
      <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-3"><Fingerprint className="size-5 text-indigo-500" /><div><p className="text-sm font-medium">Landmark fingerprinting</p><p className="text-xs text-slate-500 dark:text-slate-400">Generate the Acoustic Fingerprint Index.</p></div><span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"><CheckCircle2 className="size-3" />Enabled</span></div>
        <div className="flex items-center gap-3"><Waves className="size-5 text-indigo-500" /><div className="flex-1"><Label htmlFor="watermark" className="text-sm font-medium">Watermark payload</Label><p className="text-xs text-slate-500 dark:text-slate-400">Register a payload with this audio asset.</p></div><input id="watermark" type="checkbox" checked={enableWatermark} onChange={(event) => setEnableWatermark(event.target.checked)} className="size-4 accent-indigo-600" /></div>
        {enableWatermark && <Input value={watermarkPayload} onChange={(event) => setWatermarkPayload(event.target.value)} placeholder="USER-ISRC-9982" />}
      </div>
      <Button type="submit" className="w-full" disabled={isPending || !file || !title.trim()}>{isPending ? <><Loader2 className="animate-spin" />Indexing acoustic fingerprint…</> : <><Upload />Upload & Index Track</>}</Button>
    </form>
  );
}
