"use client";

import { useState, useRef } from "react";
import {
  Mic,
  Square,
  Search,
  Music,
  Disc,
  Radio,
  AlertCircle,
} from "lucide-react";

export default function DetectionPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [matchResult, setMatchResult] = useState<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startListening = async () => {
    setIsRecording(true);
    setMatchResult(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorder.onstop = async () => {
        setLoading(true);
        setIsRecording(false);

        const blob = new Blob(chunks, { type: "audio/wav" });
        const formData = new FormData();
        formData.append("audio", blob, "sample.wav");

        try {
          const res = await fetch("/api/identify", {
            method: "POST",
            body: formData,
          });

          const data = await res.json();
          setMatchResult(data);
        } catch (err) {
          console.error("Detection error:", err);
        } finally {
          setLoading(false);
          stream.getTracks().forEach((track) => track.stop());
        }
      };

      mediaRecorder.start();

      // Automatically capture 5-second sample window
      setTimeout(() => {
        if (mediaRecorder.state === "recording") {
          mediaRecorder.stop();
        }
      }, 5000);
    } catch (err) {
      console.error("Microphone error:", err);
      setIsRecording(false);
    }
  };

  const stopListening = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8 text-center">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Live Audio Detection
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Capture ambient audio from your microphone to match against your
          catalog index in real time.
        </p>
      </div>

      {/* Record Trigger Card */}
      <div className="border rounded-2xl p-10 bg-white shadow-sm flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          {isRecording && (
            <span className="absolute -inset-3 rounded-full bg-red-500/20 animate-ping" />
          )}
          <button
            onClick={isRecording ? stopListening : startListening}
            disabled={loading}
            className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all ${
              isRecording
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {isRecording ? (
              <Square className="w-8 h-8" />
            ) : (
              <Mic className="w-10 h-10" />
            )}
          </button>
        </div>

        <div>
          <p className="text-base font-semibold text-slate-800">
            {isRecording
              ? "Listening to Audio (5s)..."
              : loading
                ? "Matching Hashes..."
                : "Click to Identify"}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Uses Time-Offset Histogram scoring over PostgreSQL indexes
          </p>
        </div>
      </div>

      {/* Detection Results */}
      {matchResult && (
        <div className="text-left border rounded-xl p-6 bg-white shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b pb-3">
            <Radio className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-slate-900">Detection Output</h3>
          </div>

          {matchResult.assetId ? (
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-emerald-50/60 border border-emerald-200 rounded-lg">
                <Disc className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Match Found
                  </p>
                  <p className="font-bold text-slate-900 mt-0.5">
                    Asset ID: {matchResult.assetId}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-600 mt-2">
                    <span>
                      Score: <strong>{matchResult.confidence}</strong> aligned
                      hashes
                    </span>
                    <span>
                      Start Offset:{" "}
                      <strong>{matchResult.startOffset?.toFixed(2)}s</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 p-4 bg-slate-50 border rounded-lg text-slate-600 text-sm">
              <AlertCircle className="w-5 h-5 text-slate-400 shrink-0" />
              <span>
                No matching asset found in database (Score:{" "}
                {matchResult.confidence}).
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
