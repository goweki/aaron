import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compareHash } from "../utils/password-handlers";
import { Status, UserRole } from "../prisma/generated";

const authConfig: NextAuthConfig = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(`[LOGIN attempt] ...`);
        if (!credentials?.username || !credentials?.password) return null;

        const username = credentials.username as string;
        const password = credentials.password as string;

        console.log(`User attempting login: ${username}`);

        const user = await prisma.user.findFirst({
          where: {
            AND: [
              { OR: [{ phone: username }, { email: username }] },
              { status: { not: Status.DELETED } },
            ],
          },
        });

        if (!user) {
          return null;
        }

        if (!user.passwordHash) {
          console.warn(` > User password not set`);
          return null;
        }

        const isValid = await compareHash(password, user.passwordHash);

        if (!isValid) {
          console.log(` > User credentials invalid`);
          return null;
        }

        console.log(` > User authenticated.`);

        if (user.status !== Status.ACTIVE) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              status: Status.ACTIVE,
            },
          });
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          status: user.status,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.status = user.status;
      }
      if (trigger === "update" && session) {
        return { ...token, ...session };
      }

      //   if (trigger === "signIn" && user.role === UserRole.CUSTOMER) {
      //   }

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
        session.user.status = token.status as Status;
      }
      return session;
    },
    authorized({ auth, request }) {
      // Return true if user is logged in, false to block access
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirects unauthenticated users to login page automatically
      }
      return true;
    },
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
};

export default authConfig;
