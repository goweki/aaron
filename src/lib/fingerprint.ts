// Define a type alias for AudioContext
type AudioContextType = typeof AudioContext;

// Define the AudioFingerprint class
class AudioFingerprint {
  fingerprint: number[][];

  constructor() {
    this.fingerprint = [];
  }

  async run(audioBuffer: AudioBuffer): Promise<number[][]> {
    // Get the correct AudioContext constructor
    const AudioContextConstructor = (window.AudioContext ||
      (window as any).webkitAudioContext) as AudioContextType;

    return new Promise((resolve, reject) => {
      if (AudioContextConstructor) {
        const ctx = new AudioContextConstructor();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 2048; // Set FFT size
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Float32Array(bufferLength);

        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;

        source.connect(analyser);
        analyser.connect(ctx.destination);

        source.start(0);

        source.onended = () => {
          for (let i = 0; i < bufferLength; i++) {
            analyser.getFloatFrequencyData(dataArray);
            this.fingerprint.push(this._getPeaks(dataArray));
          }
          resolve(this.fingerprint);
        };
      } else {
        reject("Web Audio API is not supported");
      }
    });
  }

  private _getPeaks(dataArray: Float32Array): number[] {
    const peaks: number[] = [];
    for (let i = 1; i < dataArray.length - 1; i++) {
      if (dataArray[i] > dataArray[i - 1] && dataArray[i] > dataArray[i + 1]) {
        peaks.push(i);
      }
    }
    return peaks;
  }
}

// Usage:
export async function generateFingerprint(
  audioUrl: string
): Promise<number[][]> {
  const fingerprint = new AudioFingerprint();
  const AudioContextConstructor = (window.AudioContext ||
    (window as any).webkitAudioContext) as AudioContextType;
  const audioContext = new AudioContextConstructor();

  const response = await fetch(audioUrl);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const fingerprintData = await fingerprint.run(audioBuffer);
  console.log(fingerprintData);

  return fingerprintData;
}

// // Generate and store fingerprint
// generateFingerprint("path/to/audio/file.mp3").then((fingerprintData) => {
//   // Store fingerprintData in a database or local storage
//   localStorage.setItem("audioFingerprint", JSON.stringify(fingerprintData));
// });
