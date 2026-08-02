import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import DetectionsView from "@/components/views/detections-view";
import { getDetectionsAction } from "@/actions/dashboard-actions/detection-actions";
import { PlusIcon } from "lucide-react";

export default async function DetectionsPage() {
  const detectionsRes = await getDetectionsAction();

  if (!detectionsRes.ok) {
    return <ErrorView error={detectionsRes.error} />;
  }

  return (
    <ViewLayout
      title="Broadcast & Media Detections"
      description="Review real-time audio fingerprint matches and verification status captured across monitored channels."
    >
      <DetectionsView detections={detectionsRes.data} />
    </ViewLayout>
  );
}
