"use client";

import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { httpCodes } from "@/lib/refDictionary";
import SelectAsync from "@/components/mols/selectAsync";
import { InputImage } from "@/components/mols/InputImage";
import AssetForm from "./_asset_form";
import { Asset } from "@/lib/prisma/types";
import { DashboardContext } from "@/components/providers";
import { Input } from "@/components/ui/input";

export default function AssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { assets: _assets },
    refreshData,
  } = useContext(DashboardContext);

  const pathname = usePathname();
  const [assets, setAssets] = useState<Asset[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>();
  // const [selectedAsset, setAsset] = useState<Asset>();

  useEffect(() => {
    setAssets(
      _assets.filter((asset) => {
        const assetString = [
          asset.title,
          asset.artist,
          asset.album,
          asset.description,
        ]
          .filter(Boolean) // Remove any undefined or empty values
          .join(" "); // Join with a space

        return assetString
          .toLowerCase()
          .includes(searchPhrase?.toLocaleLowerCase() || "");
      })
    );
  }, [_assets, searchPhrase]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="w-full lg:w-1/5 lg:pt-4 overflow-x-auto lg:overflow-x-hidden">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
            <Input
              placeholder="Search"
              className="border-foreground/50 w-36 lg:w-full mb-2"
              value={searchPhrase}
              onChange={(e) => setSearchPhrase(e.target.value)}
            />
            <Link
              href="/dashboard/assets"
              className={cn(
                buttonVariants({ variant: "link" }),
                pathname === "/dashboard/assets"
                  ? "font-bold underline text-foreground"
                  : "text-foreground/75",
                "justify-start cursor-default italic"
              )}
            >
              +New Asset
            </Link>
            {assets.slice(0, 12).map((asset) => (
              <Link
                href={`/dashboard/assets/${asset.id}`}
                key={asset.id}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  pathname === `/dashboard/assets/${asset.id}`
                    ? "font-bold underline text-foreground"
                    : "text-foreground/75",
                  "justify-start cursor-default"
                )}
              >
                {asset.title}
              </Link>
            ))}
          </nav>
        </aside>
        <Card className="w-full">
          <div className="space-y-6">
            <div className="relative hidden flex-col items-start gap-8 sm:flex">
              {children}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
