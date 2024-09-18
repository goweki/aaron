// import { Binary } from "mongodb";
import { type NextRequest } from "next/server";
import { withAuthAdmin } from "@/lib/authRouteWrappers";
import prisma from "@/lib/prisma/prisma";
import { User, Status } from "@prisma/client";

// sign-up handled in api/auth/user
// export async function postHandler(req: Request, user: Partial<User>) {
//   const { email, ...user_ } = await req.json();
//   console.log("POST REQUEST: to create new user with email ", email);
//   try {
//     //
//     if (
//       await prisma.user.findUnique({
//         where: { email },
//       })
//     ) {
//       // HTTP response - task name exists
//       console.log(` > FAILED: user already exists.\n..........`);
//       return Response.json({ failed: "User already exists" });
//     } else {
//       // insert doc
//       const res_ = await prisma.user.create({
//         data: {
//           email,
//           ...user_,
//         },
//       });
//       console.log(` > SUCCESS: user created.\n..........`);
//       // HTTP response
//       return Response.json({ success: res_ });
//     }
//   } catch (err) {
//     console.error(" > ERROR: user creation failed.", err, "\n..........");
//     return Response.json({ error: err });
//   }
// }

// could handle preferences/profile update. auth updates
// are handles at api/auth/user
// export async function putHandler(req: Request, user: Partial<User>) {
//   // request body
//   const { id, ...doc } = await req.json();
//   console.log("PUT REQUEST: update user", id);
//   try {
//     // update doc
//     const updatedUser = await prisma.user.update({
//       where: { id },
//       data: doc,
//     });
//     console.log("SUCCESS: user updated\n >> ", updatedUser);
//     // HTTP response
//     return Response.json({ success: updatedUser });
//   } catch (err) {
//     console.error("ERROR: user update failed -id \n", id, " >> error: ", err);
//     return Response.json({ error: `Server error: please contact admin...` });
//   }
// }

// async function deleteHandler(req: NextRequest) {
//   // request body
//   const searchParams = req.nextUrl.searchParams;
//   const email = searchParams.get("email") as string;
//   try {
//     // delete (pull) object from the dueDates array
//     const deletedUser = await prisma.user.update({
//       where: {
//         email: email,
//       },
//       data: { status: Status.DELETED },
//     });
//     console.log(`SUCCESS: user deleted.\n..........`);
//     // HTTP response
//     return Response.json({ success: deletedUser });
//   } catch (err) {
//     console.error(" > ERROR: document deletion failed.", err, "\n..........");
//     return Response.json({ error: err });
//   }
// }

async function getHandler(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const email = url.searchParams.get("email");
  const search = url.searchParams.get("search");

  let q = {
    AND: [] as any[], // Array for 'AND' conditions
  };

  // Check for exact match with id or email if provided
  if (id) {
    q.AND.push({ id: id });
  }
  if (email) {
    q.AND.push({ email: email });
  }

  // Always check if search is contained in either id or email
  if (search) {
    q.AND.push({
      OR: [
        { id: { contains: search } }, // Partial match for id
        { email: { contains: search } }, // Partial match for email
      ],
    });
  }

  try {
    // retrieve doc
    const res_ = await prisma.user.findMany({ where: q });
    if (res_) return Response.json({ success: res_ });
    else return Response.json({ error: "no user found" });
  } catch (err) {
    console.error(" > ERROR: user retrieval erred.", err, "\n..........");
    return Response.json({ error: "SERVER ERROR" });
  }
}

export const GET = withAuthAdmin(getHandler);
// export const DELETE = withAuthAdmin(deleteHandler); //delete handled in api/auth/user
