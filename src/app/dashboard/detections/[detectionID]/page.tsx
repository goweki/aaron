import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import DetectionInspector from "@/components/views/detection-inspector";
import { getDetectionByIdAction } from "@/actions/dashboard-actions/inspection-actions";

interface Props {
  params: { detectionID: string };
}

export default async function DetectionDetailPage({ params }: Props) {
  const detectionId = params.detectionID;
  const detectionRes = await getDetectionByIdAction(detectionId);

  if (!detectionRes.ok) {
    return <ErrorView error={detectionRes.error} />;
  }

  if (!detectionRes.data) {
    return <ErrorView error="Detection not found." />;
  }

  return (
    <ViewLayout
      title="Detection Inspector"
      description="Inspect the matched broadcast sample, asset reference, and verification status."
    >
      <DetectionInspector detection={detectionRes.data} />
    </ViewLayout>
  );
}
