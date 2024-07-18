"use client";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LandingPage() {
  const { data: userSession, status: authStatus } = useSession();
  const router = useRouter();

  // AUTH check
  // router memoized
  const routeToUserCB = useCallback(() => {
    router.push("/user");
  }, []);
  //if AUTHENTICATED
  useEffect(() => {
    if (authStatus === "authenticated") routeToUserCB();
  }, [routeToUserCB, authStatus]);

  // render
  return (
    <main className="flex flex-col items-center justify-between p-8 lg:p-16 max-h-[800px] w-full">
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex md:flex-row flex-col">
        <p className="fixed left-0 top-0 w-full text-center border-b pb-6 pt-8 px-4 backdrop-blur-lg border-border bg-background/80 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          A prosecution of article 35 of the&nbsp;
          <code className="font-mono font-bold">Kenyan constitution</code>
        </p>
        <div className="fixed bottom-0 left-0 hidden lg:flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            href="/sign-in"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Sign In
          </Link>
        </div>
      </header>
      <section className="lg:my-16 relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="text-6xl md:text-8xl font-bold text-center mt-24 lg:mt-12">
          BUNGE-SCOPE
        </h1>
      </section>
      <Link
        className="lg:hidden font-mono mb-12 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        href="/sign-in"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        Sign In
      </Link>
      <section className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {selections.map(({ name, desc, link }) => (
          <Link
            key={name}
            href={link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-secondary hover:bg-primary/20"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {name}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

const selections = [
  {
    name: "Bills",
    desc: "Changes to law currently in parliament and what they seek to introduce or ammend.",
    link: "/legislations?legType=BILL",
  },
  {
    name: "Acts",
    desc: "Bills that have passed Parliament and are law.",
    link: "/legislations?legType=ACT",
  },
  {
    name: "MPs",
    desc: "Select and view activities by individual Members of Parliament.",
    link: "/mps",
  },
];
