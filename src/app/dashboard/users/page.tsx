import ErrorView from "@/components/views/error-view";
import { getUsersAction } from "@/actions/dashboard-actions/user-actions";
import UsersView from "@/components/views/users-view";
import ViewLayout from "@/components/views/view-layout";

export default async function UsersPage() {
  const usersRes = await getUsersAction();

  if (!usersRes.ok) {
    return <ErrorView error={usersRes.error} />;
  }

  return (
    <ViewLayout
      title="User & System Accounts"
      description="Manage operator access, system roles, account status, and catalog contributions."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Users" },
      ]}
    >
      <UsersView users={usersRes.data} />
    </ViewLayout>
  );
}
