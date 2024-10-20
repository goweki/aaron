"use client";

import { useContext, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useEdgeStore } from "@/lib/edgestore";
import { Asset } from "@/lib/prisma/types";
import { DashboardContext } from "@/components/providers";
import AssetForm from "../_asset_form";

export default function AssetFormPage({ params }: { params: any }) {
  const { assetID } = params;
  const {
    data: { assets },
    refreshData,
  } = useContext(DashboardContext);

  const router = useRouter();
  const [selected, setSelected] = useState<Asset>();
  const [UIstate, setUIstate] = useState<string | null>(null);

  // Memoized routing function
  const rerouteCallback = useCallback(() => {
    router.replace("/dashboard/assets");
  }, []);

  // get asset by assetID
  useEffect(() => {
    if (assetID) {
      const asset = assets.find(({ id }: { id: string }) => id === assetID);
      if (asset) setSelected(asset);
      else toast.error("Asset not found");
      setUIstate("OK");
    } else rerouteCallback();
  }, [assets, assetID, rerouteCallback]);

  //render
  return UIstate && selected ? (
    <AssetForm asset={selected} />
  ) : (
    <>This asset no longer exists</>
  );
}
