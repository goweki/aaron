import VoiceSynthesis from "@/components/mouth";
import Listener from "@/components/ears";

export default function Home() {
  return (
    // <main className="flex flex-col h-full grow items-center justify-center gap-10">
    <main>
      <Listener />
      <VoiceSynthesis />
    </main>
  );
}
