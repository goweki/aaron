"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

/**
 * ts types
 *
 */

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onerror:
    | ((this: SpeechRecognition, ev: Event & { error: string }) => any)
    | null;
}

interface SpeechRecognitionStatic {
  new (): SpeechRecognition;
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  readonly isFinal: boolean;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

/**
 *
 *
 */

export default function LandingPage() {
  const [listen, setListen] = useState<boolean>(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const SpeechRecognition = ((window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition) as SpeechRecognitionStatic;

    if (!SpeechRecognition) {
      console.error("SpeechRecognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript((prevTranscript) => prevTranscript + finalTranscript);
    };

    recognition.onerror = (event: Event & { error: string }) => {
      console.error("Speech recognition error:", event.error);
      setListen(false);
      if (event.error === "network") {
        toast.error(
          "Network error: You may not have internet connection; try using CHROME browser."
        );
      } else if (event.error === "not-allowed") {
        toast.error("Permission error: Microphone access is not allowed.");
      } else if (event.error === "service-not-allowed") {
        toast.error(
          "Permission error: Speech recognition service is not allowed."
        );
      } else if (event.error === "no-speech") {
        toast.error("No speech detected.");
      } else if (event.error === "aborted") {
        toast.error("Speech recognition aborted.");
      } else {
        toast.error(`An unknown error occurred: ${event.error}`);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!recognitionRef.current) return;
    if (listen) {
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
    }
  }, [listen]);

  useEffect(() => {
    if (listen) {
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const source = audioContext.createMediaStreamSource(stream);
          source.connect(analyser);
          analyser.fftSize = 2048;

          // Store stream and source to stop them later
          streamRef.current = stream;
          dataArrayRef.current = dataArray;
          analyserRef.current = analyser;
          audioContextRef.current = audioContext;
          drawWaveform();
        })
        .catch((error) => {
          console.error("Error accessing media devices.", error);
          setListen(false);
        });
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [listen]);

  // Handle waveform drawing
  const drawWaveform = () => {
    if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;
    const bufferLength = analyser.frequencyBinCount;

    const draw = () => {
      if (!canvasCtx) return;
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 255, 0)"; // Green color for the waveform
      canvasCtx.beginPath();

      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    };
    draw();
  };

  // render
  return (
    <main className="flex flex-col items-center justify-between p-8 lg:p-16 max-h-[800px] w-full">
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex md:flex-row flex-col">
        <p className="fixed left-0 top-0 w-full text-center border-b pb-6 pt-8 px-4 backdrop-blur-lg border-border bg-background/80 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          Autonomous Audio Recognition System&nbsp;
          <code className="font-mono font-bold">(A.A.R.O.N)</code>
        </p>
        <div className="fixed bottom-0 left-0 hidden lg:flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            href="/sign-in"
          >
            Sign In
          </Link>
        </div>
      </header>
      <section className="lg:my-16 relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-16 lg:mt-8 text-green-400">
          Automatic Audio Recognition
        </h1>
        <p className="italic text-primary text-center mt-8 lg:mt-4">
          {transcript}
        </p>
        <canvas ref={canvasRef} className="h-32 w-96 m-4" />
      </section>
      <Link
        className="lg:hidden font-mono mb-12 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        href="/sign-in"
      >
        Sign In
      </Link>
      <section className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left space-x-4">
        <div
          onClick={() => setListen((prev) => !prev)}
          className={`${
            listen ? "border-secondary bg-primary/10" : ""
          } cursor-pointer relative group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-secondary hover:bg-primary/20`}
        >
          <span className="absolute top-0 left-0 mt-2 ml-2 flex h-3 w-3">
            <span
              className={`${
                listen ? "animate-ping bg-red-400" : "bg-transparent"
              } absolute inline-flex h-full w-full rounded-full  opacity-75`}
            ></span>
            <span
              className={`${
                listen ? "bg-red-500" : "bg-transparent"
              } relative inline-flex rounded-full h-3 w-3`}
            ></span>
          </span>
          <div className="md:pl-4">
            <h2 className="mb-3 text-2xl font-semibold">
              listen
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Activate Aaron's voice recognition functionality
            </p>
          </div>
        </div>

        {options.map(({ name, desc, link }) => (
          <Link
            key={name}
            href={link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-secondary hover:bg-primary/20"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {name}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

const options = [
  {
    name: "Assets",
    desc: "Bills that have passed Parliament and are law.",
    link: "/assets",
  },
  {
    name: "Users",
    desc: "view logs of monitored audio streams ",
    link: "/users",
  },
];
