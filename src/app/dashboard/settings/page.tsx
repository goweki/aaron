import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import SettingsView from "@/components/views/settings-view";
import { getUserSettingsAction } from "@/actions/dashboard-actions/settings-actions";

export default async function SettingsPage() {
  const settingsRes = await getUserSettingsAction();

  if (!settingsRes.ok) {
    return <ErrorView error={settingsRes.error} />;
  }

  return (
    <ViewLayout
      title="Settings & API Keys"
      description="Manage your API credentials, system settings, and account integration details."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Settings" },
      ]}
    >
      <SettingsView currentUser={settingsRes.data} />
    </ViewLayout>
  );
}
