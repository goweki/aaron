// // Define a type alias for AudioContext
// type AudioContextType = typeof AudioContext;

// // Define the AudioFingerprint class
// class AudioFingerprint {
//   fingerprint: number[][];
//   fftSize: number;

//   constructor({ fftSize = 2048 }: { fftSize?: number }) {
//     this.fingerprint = [];
//     this.fftSize = fftSize;
//   }

//   async run(audioBuffer: AudioBuffer): Promise<number[][]> {
//     // Get the correct AudioContext constructor
//     const AudioContextConstructor = (window.AudioContext ||
//       (window as any).webkitAudioContext) as AudioContextType;

//     return new Promise((resolve, reject) => {
//       if (AudioContextConstructor) {
//         const ctx = new AudioContextConstructor();
//         const analyser = ctx.createAnalyser();
//         analyser.fftSize = this.fftSize;
//         const bufferLength = analyser.frequencyBinCount;
//         const dataArray = new Float32Array(bufferLength);

//         const source = ctx.createBufferSource();
//         source.buffer = audioBuffer;

//         source.connect(analyser);
//         analyser.connect(ctx.destination);

//         source.start(0);

//         source.onended = () => {
//           for (let i = 0; i < bufferLength; i++) {
//             analyser.getFloatFrequencyData(dataArray);
//             this.fingerprint.push(this._getPeaks(dataArray));
//           }
//           resolve(this.fingerprint);
//         };
//       } else {
//         reject("Web Audio API is not supported");
//       }
//     });
//   }

//   private _getPeaks(
//     dataArray: Float32Array,
//     threshold: number = 0.1
//   ): number[] {
//     const peaks: number[] = [];
//     for (let i = 1; i < dataArray.length - 1; i++) {
//       // if (dataArray[i] > dataArray[i - 1] && dataArray[i] > dataArray[i + 1]) {
//       if (
//         dataArray[i] > dataArray[i - 1] &&
//         dataArray[i] > dataArray[i + 1] &&
//         dataArray[i] > threshold
//       ) {
//         peaks.push(i);
//       }
//     }
//     return peaks;
//   }
// }

// // // Usage:
// // export async function generateFingerprint(
// //   audioUrl: string
// // ): Promise<number[][]> {
// //   const fingerprint = new AudioFingerprint({});
// //   const AudioContextConstructor = (window.AudioContext ||
// //     (window as any).webkitAudioContext) as AudioContextType;
// //   const audioContext = new AudioContextConstructor();

// //   const response = await fetch(audioUrl);
// //   const arrayBuffer = await response.arrayBuffer();
// //   const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

// //   const fingerprintData = await fingerprint.run(audioBuffer);
// //   console.log(fingerprintData);

// //   return fingerprintData;
// // }
// export async function generateFingerprint(
//   audioUrl: string,
//   fftSize?: number
// ): Promise<number[][] | Error> {
//   const fingerprint = new AudioFingerprint({ fftSize });
//   const AudioContextConstructor = (window.AudioContext ||
//     (window as any).webkitAudioContext) as AudioContextType;

//   let audioContext: AudioContext | null = null;

//   try {
//     const response = await fetch(audioUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch audio: ${response.statusText}`);
//     }
//     const arrayBuffer = await response.arrayBuffer();

//     // POSSIBLE OPTIMAZATION: Consider a pool of reusable AudioContexts
//     // class AudioContextPool {
//     //   private pool: AudioContext[] = [];
//     //   private maxPoolSize: number;

//     //   constructor(maxPoolSize: number = 10) {
//     //     this.maxPoolSize = maxPoolSize;
//     //   }

//     //   async acquire(): Promise<AudioContext> {
//     //     if (this.pool.length > 0) {
//     //       return this.pool.shift()!;
//     //     } else {
//     //       return new AudioContext();
//     //     }
//     //   }

//     //   release(audioContext: AudioContext) {
//     //     if (this.pool.length < this.maxPoolSize) {
//     //       this.pool.push(audioContext);
//     //     } else {
//     //       audioContext.close();
//     //     }
//     //   }
//     // }
//     // // USAGE
//     //     const audioContextPool = new AudioContextPool();

//     // // ...

//     // const audioContext = await audioContextPool.acquire();
//     // try {
//     //   const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     //   // ... use audioContext and audioBuffer
//     // } finally {
//     //   audioContextPool.release(audioContext);
//     // }
//     audioContext = new AudioContextConstructor();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

//     const fingerprintData = await fingerprint.run(audioBuffer);
//     console.log(fingerprintData);

//     return fingerprintData;
//   } catch (error: any) {
//     console.error("Error generating fingerprint:", error);
//     return error;
//   } finally {
//     // release resources
//     if (audioContext) {
//       audioContext.close();
//       // release resources also if using a pool of AudioContexts
//     }
//   }
// }

"use client";

// Define type alias for AudioContext
type AudioContextType = typeof AudioContext;

// AudioFingerprint class with configurable sensitivity
export default class AudioFingerprint {
  fingerprint: number[][];
  config: {
    fftSize: number;
    sensitivityThreshold: number;
    smoothingTimeConstant: number;
    minDecibels: number;
  };
  private audioUrl: string;
  private audioBuffer: AudioBuffer | null;
  private isCancelled: boolean = false;

  constructor({
    audioUrl = "",
    sensitivity = "standard",
  }: {
    audioUrl?: string;
    sensitivity?: string;
  }) {
    this.fingerprint = [];
    this.config = sensitivityConfig[sensitivity] || sensitivityConfig.standard;
    this.audioUrl = audioUrl;
    this.audioBuffer = null;
  }

  async loadAudio(audioUrl?: string): Promise<{ [key: string]: string }> {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();

    if (audioUrl) this.audioUrl = audioUrl;

    if (!this.audioUrl) return { ERROR: "No audio provided" };

    try {
      const response = await fetch(this.audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      this.audioBuffer = audioBuffer;
      console.log("Audio loaded and decoded");
      return { SUCCESS: "loaded audio" };
    } catch (error) {
      console.error("FAILED loading or decoding audio:", error);
      return { ERROR: "FAILED loading audio" };
    }
  }

  // Method to stop the audio processing
  stop() {
    console.log("Stopping audio fingerprinting...");
    this.isCancelled = true;
  }

  async run(onProgress?: (progress: number) => void): Promise<number[][]> {
    this.isCancelled = false; // Reset isCancelled at the start of run
    console.log("Starting audio fingerprinting...");

    const AudioContextConstructor = (window.AudioContext ||
      (window as any).webkitAudioContext) as AudioContextType;

    return new Promise((resolve, reject) => {
      if (AudioContextConstructor) {
        const ctx = new AudioContextConstructor();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = this.config.fftSize;
        analyser.smoothingTimeConstant = this.config.smoothingTimeConstant;
        analyser.minDecibels = this.config.minDecibels;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Float32Array(bufferLength);
        const source = ctx.createBufferSource();

        if (!this.audioBuffer) {
          console.error("NO AUDIO BUFFER....");
          return;
        }

        source.buffer = this.audioBuffer;
        source.connect(analyser);

        // Total duration of the audio in seconds
        const totalDuration = this.audioBuffer.duration;

        source.start(0);
        console.log("Audio source started...");

        // Track progress using an interval
        const progressInterval = setInterval(() => {
          if (this.isCancelled) {
            clearInterval(progressInterval);
            source.stop();
            console.log("Fingerprinting stopped by user.");
            reject("STOPPED");
            return;
          }

          const currentTime = ctx.currentTime; // The current playback time in seconds
          const progress = Math.min((currentTime / totalDuration) * 100, 100); // Calculate percentage

          // Get frequency data while audio is playing
          analyser.getFloatFrequencyData(dataArray);
          this.fingerprint.push(this._getPeaks(dataArray)); // Capture peaks continuously

          console.log(`Progress: ${progress.toFixed(2)}%`);

          if (onProgress) {
            onProgress(progress); // Call the onProgress callback with progress
          }

          // Stop when audio finishes playing
          if (currentTime >= totalDuration) {
            clearInterval(progressInterval); // Clear interval
            console.log("Audio playback finished.");
            resolve(this.fingerprint);
          }
        }, 100); // Update every 100 milliseconds

        source.onended = () => {
          clearInterval(progressInterval); // Clear interval when audio finishes
          console.log("Audio source ended.");
          if (!this.isCancelled) {
            for (let i = 0; i < bufferLength; i++) {
              analyser.getFloatFrequencyData(dataArray);
              this.fingerprint.push(this._getPeaks(dataArray));
            }
            resolve(this.fingerprint);
          }
        };
      } else {
        console.error("Web Audio API is not supported.");
        reject("Web Audio API is not supported");
      }
    });
  }

  private _getPeaks(dataArray: Float32Array): number[] {
    const peaks: number[] = [];
    for (let i = 1; i < dataArray.length - 1; i++) {
      if (
        dataArray[i] > dataArray[i - 1] &&
        dataArray[i] > dataArray[i + 1] &&
        dataArray[i] > this.config.sensitivityThreshold
      ) {
        peaks.push(i);
      }
    }
    console.log(`Peaks detected: ${peaks.length}`);
    return peaks;
  }
}

// Example sensitivity configurations
const sensitivityConfig: { [key: string]: any } = {
  high: {
    fftSize: 4096,
    sensitivityThreshold: 0.01, // Very low threshold for higher sensitivity
    smoothingTimeConstant: 0.5, // Fast response time
    minDecibels: -120, // Capture very quiet sounds
  },
  standard: {
    fftSize: 2048,
    sensitivityThreshold: 0.1, // Moderate sensitivity
    smoothingTimeConstant: 0.8, // Smoother response
    minDecibels: -100, // Default noise floor
  },
  low: {
    fftSize: 1024,
    sensitivityThreshold: 0.2, // Higher threshold for less sensitivity
    smoothingTimeConstant: 0.9, // Very smooth response
    minDecibels: -80, // Ignores very low frequencies/noise
  },
};
