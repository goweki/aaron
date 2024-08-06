"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
  // const [listen, setListen] = useState<boolean>(true);
  const [listen, setListen] = useState<boolean>(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

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
    };

    recognitionRef.current = recognition;
  }, []);

  useEffect(() => {
    if (recognitionRef.current) {
      if (listen) {
        recognitionRef.current.start();
      } else {
        recognitionRef.current.stop();
      }
    }
  }, [listen]);

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
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Sign In
          </Link>
        </div>
      </header>
      <section className="lg:my-16 relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-16 lg:mt-8 text-green-400">
          Automatic Audio Recognition
        </h1>
        <text className="italic text-primary text-center mt-8 lg:mt-4">
          {transcript}
        </text>
      </section>
      <Link
        className="lg:hidden font-mono mb-12 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        href="/sign-in"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        Sign In
      </Link>
      <section className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left space-x-4">
        {/* <div className="flex items-center justify-center space-x-2 my-8">
          <Switch
            id="toggle-listen"
            checked={listen}
            onCheckedChange={setListen}
          />
          <Label htmlFor="toggle-listen">Activate microphone</Label>
        </div> */}
        <div
          onClick={() => setListen((prev) => !prev)}
          className={`${
            listen ? "border-secondary bg-primary/10" : ""
          } relative group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-secondary hover:bg-primary/20`}
        >
          <span className="absolute top-0 left-0 mt-2 ml-2 flex h-3 w-3">
            <span
              className={`${
                listen ? "animate-ping bg-sky-400" : "bg-gray-500"
              } absolute inline-flex h-full w-full rounded-full  opacity-75`}
            ></span>
            <span
              className={`${
                listen ? "bg-sky-500" : "bg-gray-500"
              } relative inline-flex rounded-full h-3 w-3`}
            ></span>
          </span>
          <h2 className="ml-4 mb-3 text-2xl font-semibold">
            listen
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Activate aaron ears
          </p>
        </div>

        {options.map(({ name, desc, link }) => (
          <Link
            key={name}
            href={link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-secondary hover:bg-primary/20"
            // target="_blank"
            // rel="noopener noreferrer"
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
  // {
  //   name: "Listen",
  //   desc: "Changes to law currently in parliament and what they seek to introduce or ammend.",
  //   link: "/legislations?legType=BILL",
  // },
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
