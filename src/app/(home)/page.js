import VoiceSynthesis from "@/components/mouth";
import Listener from "@/components/ears";

export default function Home() {
  return (
    <main>
      <Listener />
      <VoiceSynthesis />
    </main>
  );
}
