import NextAuth from "next-auth";
import authConfig from "./auth-options";

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
