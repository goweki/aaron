"use client";

import Link from "next/link";
import ButtonPrimary from "../atoms/buttons";

export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center md:px-4 md:py-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          AARON
          <p className="font-medium text-orange-700 sm:block">
            Autonomous Audio Recognition
          </p>
        </h1>

        <p className="mt-4 sm:text-xl/relaxed px-2">
          AARON analyses and synthesizes voice and sounds, enabling processing
          of broadcast signals and conversations
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* <Link
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Sign In
            </Link> */}
          <Link href="/sign-in">
            <ButtonPrimary label="Sign In" onClick={() => ""} />
          </Link>
        </div>
      </div>
    </section>
  );
}
