import "server-only";

import { auth } from "./index";
import { redirect } from "next/navigation";

export async function requireUser() {
  const session = await auth();

  if (!session?.user) redirect("/sign-in");

  return session.user;
}
