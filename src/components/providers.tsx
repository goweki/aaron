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
import Link from "next/link";
import { fetchOpenStatistics } from "@/actions/landing-page-actions";
import { fetchDashboardData } from "@/actions/dashboard-actions";
import {
  AssetWithRelations,
  UserWithRelations,
} from "@/actions/dashboard-actions/dashboard-types";

export interface OpenData {
  assets: number;
  detections: number;
}

export interface ClosedData {
  users: UserWithRelations[];
  assets: AssetWithRelations[];
}

interface DashboardContext {
  data: ClosedData;
  refreshData: () => void;
}

export const OpenContext = createContext<OpenData>({
  assets: 0,
  detections: 0,
});

export const DashboardContext = createContext<DashboardContext>({
  data: {
    users: [],
    assets: [],
  },
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
  const [data, setData] = useState<OpenData>({ assets: 0, detections: 0 });
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
        const openStatRes = await fetchOpenStatistics();

        if (openStatRes.ok) {
          setData(openStatRes.data);
        } else {
          setLoadingObg((prev) => ({ ...prev, error: openStatRes.error }));
        }
      })();
    } catch (error) {
      toast.error((error as any).message || JSON.stringify(error));
    } finally {
      setLoadingObg((prev) => ({ ...prev, data: false }));
    }
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
              <OpenContext.Provider value={data}>
                {children}
              </OpenContext.Provider>
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
  const [data, setData] = useState<ClosedData | null>(null);
  const [isLoading, setLoadingObg] = useState(_def_isLoadingObg);
  // func update UI data
  const fetchUIuserData = useCallback(async () => {
    try {
      const dataRes = await fetchDashboardData();

      if (dataRes.ok) {
        setData(dataRes.data);
      } else {
        setLoadingObg((prev) => ({
          ...prev,
          error: dataRes.error,
          data: false,
        }));
      }
    } catch (error) {}
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
