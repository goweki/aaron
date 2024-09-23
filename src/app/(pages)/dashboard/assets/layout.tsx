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
import { useContext, useState } from "react";
import { httpCodes } from "@/lib/refDictionary";
import SelectAsync from "@/components/mols/selectAsync";
import { InputImage } from "@/components/mols/InputImage";
import AssetForm from "./_asset_form";
import { Asset } from "@/lib/prisma/types";
import { DashboardContext } from "@/components/providers";

export default function AssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { assets },
    refreshData,
  } = useContext(DashboardContext);
  const pathname = usePathname();
  // const [assets, setAssets] = useState<Asset[]>(dummyAssets);
  const [selectedAsset, setAsset] = useState<Asset>();

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5 lg:pt-20">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
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
            {assets.map((asset) => (
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
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              {children}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
