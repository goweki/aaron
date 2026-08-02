"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Mic,
  MicOff,
  Radio,
  Music2,
  ArrowRight,
  ShieldCheck,
  LayoutDashboard,
  User,
  Activity,
} from "lucide-react";
import ThemeToggle from "@/components/mols/themeToggle";
import { usePublicData } from "@/components/providers";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAudioListener } from "@/hooks/use-audio-listener";

export default function LandingPageClient() {
  const { data: session } = useSession();
  const { isListening, transcript, canvasRef, toggleListening } =
    useAudioListener();
  const { assets = [], detections = [] } = usePublicData() || {};

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 text-white rounded-lg">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-base sm:text-lg">
                A.A.R.O.N
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-500 dark:text-slate-400 ml-2">
                Autonomous Audio Recognition
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {session?.user ? (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard" className="gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                </Button>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-medium">
                  <User className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{session.user.name || session.user.email}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                {/* <Button
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  asChild
                >
                  <Link href="/sign-up">Get Started</Link>
                </Button> */}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col items-center justify-between space-y-12">
        <div className="text-center space-y-4 max-w-3xl">
          <Badge
            variant="secondary"
            className="px-3 py-1 text-xs gap-1.5 font-medium border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Live Acoustic Watermark &
            Identification
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Real-Time Broadcast & Audio Recognition
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Detect acoustic fingerprints, monitor live audio streams, and track
            digital rights media autonomously.
          </p>
        </div>

        {/* Live Audio Visualizer Canvas & Voice Recognition Widget */}
        <Card className="w-full max-w-2xl border-slate-200 dark:border-slate-800 shadow-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg font-semibold flex items-center justify-center gap-2">
              <Activity className="w-5 h-5 text-indigo-500" /> Acoustic Sampling
              Unit
            </CardTitle>
            <CardDescription>
              {isListening
                ? "Listening... Speak or play audio near your microphone."
                : "Click the button below to start live microphone audio capture."}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-center space-y-6 pt-4">
            {/* Waveform Output */}
            <div className="w-full h-32 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center relative">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                width={600}
                height={128}
              />
              {!isListening && (
                <span className="absolute text-xs text-slate-500 font-mono">
                  [ Oscilloscope Standby ]
                </span>
              )}
            </div>

            {/* Live Transcript Output */}
            {transcript && (
              <div className="w-full p-4 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 rounded-lg text-center">
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium uppercase tracking-wider mb-1">
                  Transcribed Acoustic Data
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 italic">
                  &ldquo;{transcript}&rdquo;
                </p>
              </div>
            )}

            {/* Mic Toggle Trigger */}
            <Button
              size="lg"
              onClick={toggleListening}
              className={`w-full sm:w-auto px-8 py-6 rounded-full font-semibold transition-all shadow-md gap-2 ${
                isListening
                  ? "bg-red-600 hover:bg-red-700 text-white animate-pulse"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-5 h-5" />
                  Stop Sampling
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5" />
                  Activate Voice Recognition
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl pt-8">
          <Card className="hover:border-indigo-500 transition-all shadow-sm hover:shadow-md group">
            <CardHeader>
              <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg w-fit mb-2">
                <Music2 className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl">Asset Catalog</CardTitle>
              <CardDescription>
                Manage fingerprinted tracks, watermark hashes, and metadata
                index.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button
                variant="ghost"
                className="px-0 group-hover:translate-x-1 transition-transform gap-1.5 text-indigo-600 dark:text-indigo-400"
                asChild
              >
                <Link href="/dashboard/assets">
                  Explore Catalog <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-indigo-500 transition-all shadow-sm hover:shadow-md group">
            <CardHeader>
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-lg w-fit mb-2">
                <Radio className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl">Stream Monitoring</CardTitle>
              <CardDescription>
                View real-time detection logs across live broadcast channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button
                variant="ghost"
                className="px-0 group-hover:translate-x-1 transition-transform gap-1.5 text-emerald-600 dark:text-emerald-400"
                asChild
              >
                <Link href="/dashboard/detections">
                  View Detections <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-indigo-500 transition-all shadow-sm hover:shadow-md group">
            <CardHeader>
              <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg w-fit mb-2">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl">System Overview</CardTitle>
              <CardDescription>
                Access full system telemetry, station sessions, and management.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button
                variant="ghost"
                className="px-0 group-hover:translate-x-1 transition-transform gap-1.5 text-indigo-600 dark:text-indigo-400"
                asChild
              >
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} Autonomous Audio Recognition System
          (A.A.R.O.N). All rights reserved.
        </p>
      </footer>
    </div>
  );
}
