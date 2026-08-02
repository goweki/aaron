import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import MonitoringView from "@/components/views/monitoring-view";
import { getMonitoringSessionsAction } from "@/actions/dashboard-actions/monitoring-actions";

export default async function MonitoringPage() {
  const sessionsRes = await getMonitoringSessionsAction();

  if (!sessionsRes.ok) {
    return <ErrorView error={sessionsRes.error} />;
  }

  return (
    <ViewLayout
      title="Monitoring Sessions"
      description="Track active broadcast monitors, session lifecycles, and match telemetry."
    >
      <MonitoringView sessions={sessionsRes.data} />
    </ViewLayout>
  );
}
