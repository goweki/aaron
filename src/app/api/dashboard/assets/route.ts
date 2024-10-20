//export const dynamic = 'auto'; // 'auto' | 'force-dynamic' | 'error' | 'force-static'

import { withAuthAdmin } from "@/lib/authRouteWrappers";
import prisma from "@/lib/prisma/prisma";
import { Prisma, User } from "@prisma/client";

// POST
const postHandler = async (request: Request, user: Partial<User>) => {
  try {
    // request body
    const doc = await request.json();
    console.log("POST REQUEST: new asset: ", doc);
    // insert doc
    const res_ = await prisma.asset.create({ data: doc });

    return Response.json({ SUCCESS: "asset created", assetId: res_.id });
    //return Response.json({ FAILED: 'action NOT performed' });
  } catch (err) {
    console.error("ERROR in route: api/dashboard/assets - POST \n > ", err);
    return Response.json({ ERROR: "Server error" });
  }
};

// PUT
const putHandler = async (request: Request, user: Partial<User>) => {
  try {
    // request body
    const doc = await request.json();
    console.log(`PUT REQUEST: update asset: `, doc);
    const { id, fingerprint, ...doc_ } = doc;

    // update doc
    if (Object.entries(doc_).length > 0) {
      await prisma.asset.update({
        where: { id },
        data: doc_,
      });
    }

    if (fingerprint) {
      await prisma.audioFingerprint.upsert({
        where: { assetId: id },
        update: {
          fingerprint,
        },
        create: {
          assetId: id,
          fingerprint,
        },
      });
    }
    return Response.json({ SUCCESS: "asset updated successfully" });
    //return Response.json({ FAILED: 'action NOT performed' });
  } catch (err) {
    console.error("ERROR in route: api/dashboard/assets - PUT \n > ", err);
    return Response.json({ ERROR: "SERVER ERROR" });
  }
};

// DELETE
const deleteHandler = async (request: Request, user: Partial<User>) => {
  try {
    const { searchParams } = new URL(request.url);
    const assetId = searchParams.get("assetId");
    if (!assetId) return Response.json({ FAILED: "No asset provided" });

    console.log(`DELETE REQUEST: asset: `, assetId);
    const deletedAsset = await prisma.asset.delete({
      where: {
        id: assetId,
      },
    });
    console.log("Deleted asset:", deletedAsset);
    return Response.json({ SUCCESS: "asset deleted" });
    //return Response.json({ FAILED: 'action NOT performed' });
  } catch (err: any) {
    console.error("ERROR in route: api/otp - DELETE \n > ", err);
    return Response.json({ error: "SERVER ERROR" });
  }
};

// // GET
// const getHandler = async (request: Request, user: Partial<User>) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");
//     console.log(`PUT REQUEST: item data: `, id);
//     //return Response.json({ success: 'action performed' });
//     //return Response.json({ failed: 'action NOT performed' });
//   } catch (err: any) {
//     console.error("ERROR in route: api/otp - GET \n > ", err);
//     return Response.json({ error: "SERVER ERROR" });
//   }
// };

// export const GET = withAuthAdmin(getHandler);
export const POST = withAuthAdmin(postHandler);
export const PUT = withAuthAdmin(putHandler);
export const DELETE = withAuthAdmin(deleteHandler);
