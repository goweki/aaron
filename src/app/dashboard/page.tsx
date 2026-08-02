import { fetchDashboardData } from "@/actions/dashboard-actions";
import ErrorView from "@/components/views/error-view";
import ViewLayout from "@/components/views/view-layout";
import DashboardOverview from "@/components/views/dashboard-overview";

export default async function DashboardIndexPage() {
  const dashboardRes = await fetchDashboardData();

  if (!dashboardRes.ok) {
    return <ErrorView error={dashboardRes.error} />;
  }

  return (
    <ViewLayout
      title="System Telemetry Overview"
      description="Monitor catalog capacity, broadcast activity, acoustic fingerprint matches, and operational notifications."
    >
      <DashboardOverview data={dashboardRes.data} />
    </ViewLayout>
  );
}
