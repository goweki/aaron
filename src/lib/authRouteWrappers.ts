import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";

// Utility function to construct base URL
function constructBaseUrl(req: Request): string {
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const host = req.headers.get("host");
  return `${protocol}://${host}`;
}

// General authorization middleware
export function withAuthGeneral(
  handler: (req: any, user: any) => Promise<Response>
) {
  return async function (req: Request): Promise<Response> {
    try {
      const session = await getServerSession(authOptions);

      if (!session?.user) {
        // No session or user, return unauthorized
        return new Response("Unauthorized", { status: 401 });
      }

      // Call the original handler with the session user
      return await handler(req, session.user);
    } catch (error) {
      // Handle any potential errors
      console.error("Auth error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  };
}

// Admin-specific authorization middleware
export function withAuthAdmin(
  handler: (req: any, user: any) => Promise<Response>
) {
  console.log("withAuthAdmin");
  return async function (req: Request): Promise<Response> {
    try {
      const session = await getServerSession(authOptions);

      if (!session?.user) {
        // No session or user, return unauthorized
        return new Response("Unauthorized", { status: 401 });
      }

      if (!session.user.role.includes("ADMIN")) {
        // User is not an admin, return forbidden
        return new Response("Forbidden", { status: 403 });
      }

      // Call the original handler with the session user
      return await handler(req, session.user);
    } catch (error) {
      // Handle any potential errors
      console.error("Admin auth error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  };
}
