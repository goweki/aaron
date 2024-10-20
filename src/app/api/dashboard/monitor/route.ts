// import { Binary } from "mongodb";
import { type NextRequest } from "next/server";
import { withAuthAdmin } from "@/lib/authRouteWrappers";
import prisma from "@/lib/prisma/prisma";
import { User, Status } from "@prisma/client";
import { spawn } from "child_process";
import { Codegen as AudioFingerprinter } from "stream-audio-fingerprint";
const Readable = require("stream").Readable;

import { Writable } from "stream";
import Hotlist from "@/lib/predictor-db";

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

async function postHandler(req: NextRequest, user: Partial<User>) {
  const formData = await req.formData();
  const audioFile = formData.get("file") as File;
  // console.log("AudioFile - ", audioFile);

  try {
    if (!audioFile) return Response.json({ FAILED: "No audio provided" });
    console.log("Received audio:", audioFile);

    // generate fingerprint
    const fingerprinter = new AudioFingerprinter();

    // Set up the FFmpeg command to decode the incoming audio stream
    const decoder = spawn(
      "ffmpeg",
      [
        "-i",
        "pipe:0",
        "-acodec",
        "pcm_s16le",
        "-ar",
        "22050",
        "-ac",
        "1",
        "-f",
        "wav",
        "-v",
        "fatal",
        "pipe:1",
      ],
      { stdio: ["pipe", "pipe", process.stderr] }
    );

    // Pipe output of ffmpeg decoder to the fingerprinter
    decoder.stdout.pipe(fingerprinter);

    // Pipe input to this file to ffmpeg decoder
    const audioArrayBuffer = await audioFile.arrayBuffer();
    const audioBuffer = Buffer.from(audioArrayBuffer);
    const audioStream = Readable.from(audioBuffer);
    audioStream.pipe(decoder.stdin); // Pipe the audioStream to ffmpeg

    //  append and log fingerprint points as they are found
    let fingerprint_: any[] = [];
    fingerprinter.on("data", (data) => {
      for (let i = 0; i < data.tcodes.length; i++) {
        // console.log(`time=${data.tcodes[i]} fingerprint=${data.hcodes[i]}`);
        fingerprint_.push({
          time: data.tcodes[i],
          fingerprint: data.hcodes[i],
        });
      }
    });

    // Handle end of the fingerprinting process
    fingerprinter.on("end", () => {
      console.log("Fingerprints stream ended. Fingerprint: ", fingerprint_);
      // Kill the ffmpeg child process to ensure it terminates
      // decoder.kill("SIGTERM"); // Send a termination signal to the child process
    });

    // Handle errors
    fingerprinter.on("error", (err) => {
      console.error("Error in fingerprinter:", err);
      // Kill the ffmpeg child process to ensure it terminates
      // decoder.kill("SIGTERM"); // Send a termination signal to the child process
    });

    return Response.json({
      SUCCESS: "Fingerprint generation request received",
    });
  } catch (err) {
    console.error(
      " > ERROR: fingeprint generation erred.",
      err,
      "\n.........."
    );
    return Response.json({ ERROR: "SERVER ERROR" });
  }
}

export const POST = withAuthAdmin(postHandler);
// export const DELETE = withAuthAdmin(deleteHandler); //delete handled in api/auth/user
