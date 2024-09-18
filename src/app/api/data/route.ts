import { withAuthAdmin } from "@/lib/authRouteWrappers";
import prisma from "@/lib/prisma/prisma";
import { compareHash } from "@/lib/utils";
import { Status } from "@prisma/client";
export const revalidate = 3600; //after 1 hr // false | 0 | number

// export const POST = withAuthAdmin(postHandler);
// export const PUT = withAuthAdmin(putHandler);
// export const DELETE = withAuthAdmin(deleteHandler);

// GET ui data
const getHandler = async (request: Request) => {
  try {
    // console.log(`GET REQUEST: UI data: `);
    //  Query db
    const allUsers = await prisma.user.findMany({
      where: {
        status: { not: Status.DELETED },
      },
      include: {
        assets: true,
      },
    });
    const allAssets = await prisma.asset.findMany();

    return Response.json({
      success: { users: allUsers, assets: allAssets },
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

export const GET = getHandler;
