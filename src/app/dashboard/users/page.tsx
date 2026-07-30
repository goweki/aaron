import ErrorView from "@/components/views/error-view";
import { getUsersAction } from "@/actions/dashboard-actions/user-actions";
import UsersView from "@/components/views/users-view";

export default async function UsersPage() {
  const usersRes = await getUsersAction();

  if (!usersRes.ok) {
    return <ErrorView error={usersRes.error} />;
  }

  return <UsersView users={usersRes.data} />;
}
