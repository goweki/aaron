"use client";

import { createContext, useContext, useState } from "react";

export interface PublicData {
  assets: number;
  detections: number;
}

const PublicContext = createContext<PublicData>({
  assets: 0,
  detections: 0,
});

export function PublicProvider({
  initialData,
  children,
}: {
  initialData: PublicData;
  children: React.ReactNode;
}) {
  const [data] = useState<PublicData>(initialData);

  return (
    <PublicContext.Provider value={data}>{children}</PublicContext.Provider>
  );
}

export function usePublicData() {
  return useContext(PublicContext);
}
