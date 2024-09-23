import { withAuthAdmin, withAuthGeneral } from "@/lib/authRouteWrappers";
import prisma from "@/lib/prisma/prisma";
import { compareHash } from "@/lib/utils";
import { Status, User } from "@prisma/client";
export const revalidate = 3600; //after 1 hr // false | 0 | number

// GET user data
const getHandler = async (request: Request, user: Partial<User>) => {
  try {
    // console.log(`GET REQUEST: UI data: `);
    const q: any = user.role?.includes("ADMIN")
      ? {
          include: {
            administrator: true,
            fingerprint: true,
          },
        }
      : {
          where: {
            adminId: user.id,
          },
          include: {
            administrator: true,
            fingerprint: true,
          },
        };

    //  Query db
    const userAssets = await prisma.asset.findMany(q);

    return Response.json({
      success: { assets: userAssets },
    });
    //
  } catch (err: any) {
    console.error("ERROR in route: api/data - GET \n > ", err);
    return Response.json({ error: "SERVER ERROR" });
  }
};

//   // PUT
//   const putHandler = async (request: Request) => {
//     try {
//       // request body
//       const doc = await request.json();
//       console.log(`PUT REQUEST: item data: `, doc);
//       // const { id, ...doc_ } = doc;
//       // update doc
//       // const res_ = await prisma.case.update({
//       //   where: { id },
//       //   data: {
//       //     ...doc_,
//       //   },
//       // });

//       //return Response.json({ success: 'action performed' });
//       //return Response.json({ failed: 'action NOT performed' });
//     } catch (err) {
//       console.error("ERROR in route: api/otp - PUT \n > ", err);
//       return Response.json({ error: "SERVER ERROR" });
//     }
//   };

// // DELETE
// const deleteHandler = async (request: Request) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");
//     console.log(`PUT REQUEST: item data: `, id);
//     //return Response.json({ success: 'action performed' });
//     //return Response.json({ failed: 'action NOT performed' });
//   } catch (err: any) {
//     console.error("ERROR in route: api/otp - DELETE \n > ", err);
//     return Response.json({ error: "SERVER ERROR" });
//   }
// };

export const GET = withAuthGeneral(getHandler);
// export const POST = withAuthAdmin(postHandler);
// export const PUT = withAuthAdmin(putHandler);
// export const DELETE = withAuthAdmin(deleteHandler);
