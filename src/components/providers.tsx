"use client";
import React, { useEffect, useState, createContext } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster as ReactHotToaster } from "react-hot-toast";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import LoaderHourglass from "./loader";
import { TooltipProvider } from "./ui/tooltip";
import { User, Asset } from "@/lib/prisma/types";
import { httpCodes } from "@/lib/refDictionary";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DataContext {
  users: User[];
  assets: Asset[];
}

export const DataContext = createContext<DataContext>({
  users: [],
  assets: [],
});

const _def_isLoadingObg = {
  splash: true,
  splashLag: true,
  data: true,
  error: "",
};

export function RootProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState<DataContext>({ users: [], assets: [] });
  const [isLoading, setLoadingObg] = useState(_def_isLoadingObg);

  // onMount
  useEffect(() => {
    setTimeout(() => {
      setLoadingObg((prev) => ({ ...prev, splash: false }));
    }, 4000);
  }, []);

  // fetch data
  useEffect(() => {
    try {
      (async () => {
        const fetchOptions = {
          method: "GET",
        };
        const res_UIdata = await fetch("/api/data", fetchOptions).then(
          async (res_) => {
            if (res_.ok) {
              return await res_.json();
            } else {
              console.log(`ERROR: ` + JSON.stringify(res_));
              return { error: httpCodes[res_.status] };
            }
          }
        );
        if (res_UIdata?.success as DataContext) {
          setData(res_UIdata.success);
        } else {
          // add error to isLoading, ie- UIstate
          setLoadingObg((prev) => ({
            ...prev,
            error: res_UIdata.failed || res_UIdata.error || "unknown error",
          }));
        }
        setLoadingObg((prev) => ({ ...prev, data: false }));
      })();
    } catch (error) {}

    return () => {
      // Cleanup logic here
    };
  }, []);

  // render
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="system">
        <SessionProvider>
          <TooltipProvider>
            {isLoading.splashLag ? (
              <LoaderHourglass
                isLoading={isLoading.splash || isLoading.data}
                onExited={() =>
                  setLoadingObg((prev) => ({ ...prev, splashLag: false }))
                }
              />
            ) : isLoading.error ? (
              <div className="text-center p-4 m-auto">
                ERROR encountered.{" "}
                <Link href="/" className="font-bold">
                  {" "}
                  Click here{" "}
                </Link>{" "}
                to go back to home, or try again later.{" "}
              </div>
            ) : (
              <DataContext.Provider value={data}>
                {children}
              </DataContext.Provider>
            )}
          </TooltipProvider>
          <ReactHotToaster />
          <Toaster />
        </SessionProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
