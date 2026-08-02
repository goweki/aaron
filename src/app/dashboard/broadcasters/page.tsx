import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import BroadcastersView from "@/components/views/broadcasters-view";
import { getBroadcastersAction } from "@/actions/dashboard-actions/broadcaster-actions";

export default async function BroadcastersPage() {
  const broadcastersRes = await getBroadcastersAction();

  if (!broadcastersRes.ok) {
    return <ErrorView error={broadcastersRes.error} />;
  }

  return (
    <ViewLayout
      title="Broadcaster Registry"
      description="Register broadcast channels, manage stream metadata, and inspect monitoring sessions."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Broadcasters" },
      ]}
    >
      <BroadcastersView broadcasters={broadcastersRes.data} />
    </ViewLayout>
  );
}
