import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import WatermarksView from "@/components/views/watermarks-view";
import { getWatermarksAction } from "@/actions/dashboard-actions/watermark-actions";

export default async function WatermarksPage() {
  const watermarksRes = await getWatermarksAction();

  if (!watermarksRes.ok) {
    return <ErrorView error={watermarksRes.error} />;
  }

  return (
    <ViewLayout
      title="Watermark Studio"
      description="Review registered watermark payloads and trigger server-side embedding workflows."
    >
      <WatermarksView watermarks={watermarksRes.data} />
    </ViewLayout>
  );
}
