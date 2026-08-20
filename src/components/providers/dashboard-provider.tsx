"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useTransition,
} from "react";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { fetchDashboardCounts } from "@/actions/dashboard-actions";
import {
  AssetWithRelations,
  UserWithRelations,
} from "@/actions/dashboard-actions/dashboard-types";

export interface ClosedData {
  userCount: number;
  assetCount: number;
  broadcasterCount: number;
  detectionsCount: number;
}

interface DashboardContextType {
  data: ClosedData;
  refreshData: () => Promise<void>;
  isRefreshing: boolean;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({
  initialData,
  children,
}: {
  initialData: ClosedData;
  children: React.ReactNode;
}) {
  const [data, setData] = useState<ClosedData>(initialData);
  const [isPending, startTransition] = useTransition();

  const refreshData = useCallback(async () => {
    startTransition(async () => {
      const res = await fetchDashboardCounts();
      if (res.ok && res.data) {
        setData(res.data);
      }
    });
  }, []);

  return (
    <EdgeStoreProvider>
      <DashboardContext.Provider
        value={{
          data,
          refreshData,
          isRefreshing: isPending,
        }}
      >
        {children}
      </DashboardContext.Provider>
    </EdgeStoreProvider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
