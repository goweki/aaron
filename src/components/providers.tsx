"use client";
import React, { useEffect, useState, createContext, useCallback } from "react";
import { ThemeProvider } from "next-themes";
import toast, { Toaster as ReactHotToaster } from "react-hot-toast";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { EdgeStoreProvider } from "@/lib/edgestore";
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

interface DashboardContext {
  data: { assets: Asset[] };
  refreshData: () => void;
}

export const DataContext = createContext<DataContext>({
  users: [],
  assets: [],
});

export const DashboardContext = createContext<DashboardContext>({
  data: { assets: [] },
  refreshData: () => {},
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

export default function DashboardProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const [data, setData] = useState(null);
  const [isLoading, setLoadingObg] = useState(_def_isLoadingObg);
  // func update UI data
  const fetchUIuserData = useCallback(async () => {
    try {
      //fetch options
      const fetchOptions = {
        method: "GET",
      };
      // console.log("FETCHING data for: ", session.user);

      // POST request using fetch
      const response = await fetch(`/api/dashboard/data`, fetchOptions).then(
        async (res_) => {
          if (res_?.ok) {
            return await res_.json();
          } else {
            console.log(`ERROR: ` + JSON.stringify(res_));
            toast.error(httpCodes[res_?.status] ?? "Unknown error");
          }
        }
      );

      // console.log("RESPONSE", json_);
      if (response?.success) {
        // console.log("DASHBOARD DATA:", response.success);
        setData(response.success);
      } else {
        console.error(
          "FAILED: could not fetch data\n > " +
            (response?.failed ?? response?.error ?? "Unknown error")
        );
      }
    } catch (err) {
      console.error("ERROR: caught error\n > " + err);
    } finally {
      setLoadingObg((prev) => ({ ...prev, data: false }));
    }
  }, []);

  // onMount
  useEffect(() => {
    if (session?.user) {
      fetchUIuserData();
    }
  }, [session?.user, fetchUIuserData]);

  //render
  return isLoading.splashLag ? (
    <LoaderHourglass
      isLoading={isLoading.data}
      onExited={() => setLoadingObg((prev) => ({ ...prev, splashLag: false }))}
    />
  ) : !data ? (
    <div className="mt-12">
      <p className="text-center">
        There was an error loading the contents of this page. Try again later.
      </p>
      <p className="text-center">
        <Link href="/" className="text-red-800 dark:text-red-400 underline">
          click here{" "}
        </Link>
        to go to homepage
      </p>
    </div>
  ) : (
    <EdgeStoreProvider>
      <DashboardContext.Provider value={{ data, refreshData: fetchUIuserData }}>
        {children}
      </DashboardContext.Provider>
    </EdgeStoreProvider>
  );
}
