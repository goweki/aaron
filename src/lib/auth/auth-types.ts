import { DefaultSession } from "next-auth";
import { Status, UserRole } from "../prisma/generated";

declare module "next-auth" {
  // This extends the User object returned by the adapter/database
  interface User {
    role?: UserRole;
    status?: Status;
    phone?: string;
  }

  interface Session {
    user: {
      id: string;
      role: UserRole;
      status: Status;
      phone: string | null;
    } & DefaultSession["user"];
  }
}

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     role: UserRole;
//     status: Status;
//     phone: string | null;
//   }
// }
