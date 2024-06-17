import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compareHash } from "@/helpers/bcryptHandlers";

// interface User {
//   id: string
//   name: string | null
//   email: string
//   password:string
//   image?: string | null
//   institution?:string
//   role?:string
// }

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      /** Authenticates the provided credentials.
       *
       * @param {Object} credentials - The user credentials.
       * @param {string} credentials.email - The email address of the user.
       * @param {string} credentials.password - The password of the user.
       * @returns {Object|null} Returns an object with user details e.g.{ id: 1, name: 'J Smith', email: 'jsmith@example.com' } if authentication is successful, otherwise returns null.
       */
      async authorize(credentials) {
        if ((!credentials || !credentials.email, !credentials.password))
          throw new Error("incomplete credentials provided");
        const { email, password } = credentials;
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        if (!credentials) return null;
        // run query on db
        // check if user exists
        let user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        // console.log(user);
        // if Credentials valid
        if (
          user &&
          user.password &&
          (await compareHash(password, user.password))
        ) {
          // remove user.password;
          const { password, ...user_ } = user;
          // valid credentials
          console.log(
            `\n.............\nSUCCESS: User authenticated\n > ${JSON.stringify(
              user_
            )}`
          );
          return user_;
        } else {
          // invalid credentials
          console.error(
            ` FAILED: Invalid credentials\n > by ${JSON.stringify(
              credentials
            )}\n`
          );
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Persist role to the token right after signIn
      if (user) {
        // console.log("token here: ", user);
        token.id = user.id;
        token.institutionIDs = user.institutionIDs;
        token.roles = user.roles;
        token.photoUrl = user.photoUrl;
      }
      return token;
    },
    async session({ session, token }) {
      // Append role,institution to properties sent to the client
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.institutionIDs = token.institutionIDs;
        session.user.photoUrl = token.photoUrl;
      }
      // console.log("session here: ", session);
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    signOut: "/auth/sign-out",
    //error: "/auth/error", // Error code passed in query string as ?error=
    //verifyRequest: "/auth/verify-request", // (used for check email message)
    //newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
