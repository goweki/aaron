"use client";

import React, { useState, useEffect, useRef } from "react";

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

const Recog = () => {
  const [listen, setListen] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const SpeechRecognition = ((window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition) as SpeechRecognitionStatic;

    if (!SpeechRecognition) {
      console.error("SpeechRecognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscript(
            (prevTranscript) => prevTranscript + event.results[i][0].transcript
          );
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript((prevTranscript) => prevTranscript + interimTranscript);
    };

    recognition.onerror = (event: Event & { error: string }) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;

    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const source = audioContext.createMediaStreamSource(stream);
          source.connect(analyser);
          drawWaveform();
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
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
      requestAnimationFrame(draw);
      if (!canvasCtx) {
        console.log("No canvas context");
        return;
      }
      analyser.getByteTimeDomainData(dataArray);
      canvasCtx.fillStyle = "rgb(200, 200, 200)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";
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

  const handleSwitchChange = () => {
    setListen((prevListen) => !prevListen);
  };

  return (
    <div>
      <h1>Speech to Text with Waveform Visualization</h1>
      <label>
        <input type="checkbox" checked={listen} onChange={handleSwitchChange} />
        Activate Microphone
      </label>
      <div>
        <h2>Transcript:</h2>
        <p>{transcript}</p>
      </div>
      <canvas ref={canvasRef} width="600" height="200"></canvas>
    </div>
  );
};

export default Recog;
