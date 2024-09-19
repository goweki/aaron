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
import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { httpCodes } from "@/lib/refDictionary";
import SelectAsync from "@/components/mols/selectAsync";
import { InputImage } from "@/components/mols/InputImage";
import AssetForm from "./_assets_form";
import { Asset } from "@/lib/prisma/types";

export default function AssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [assets, setAssets] = useState<Asset[]>(dummyAssets);
  const [selectedAsset, setAsset] = useState<Asset>();

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5 pt-2">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            <Link
              href="/dashboard/assets"
              className={cn(
                buttonVariants({ variant: "link" }),
                !selectedAsset
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
                  selectedAsset?.id === asset.id
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

const dummyAssets: Asset[] = [
  {
    id: "64c8d6f91c9d440000a65a1d",
    title: "Summer Vibes",
    description: "A collection of summer-themed music tracks.",
    type: "MUSIC", // Ensure this is a valid value of the AssetType enum
    status: "ACTIVE", // Ensure this is a valid value of the Status enum
    image: null, // Optional field; set if you have an image URL or path

    adminId: "64b8e6d41c2a000015a732ab",
    interestedIds: ["64b8e6d41c2a000015a732ac", "64b8e6d41c2a000015a732ad"],
    fingerprint: {
      id: "64c8d6f91c9d440000f82c3e",
      assetId: "64c8d6f91c9d440000a65a1d", // Reference to the asset ID
      fingerprint: {
        hash: "d41d8cd98f00b204e9800998ecf8427e",
      },
    },

    watermark: {
      id: "64c8d6f91c9d440000d92c4a",
      assetId: "64c8d6f91c9d440000a65a1d", // Reference to the asset ID
      watermark: "xy123pattern",
    },
  },
  {
    id: "64c8d6f91c9d440000b94a2f",
    title: "Corporate Presentation",
    description: "Background music and soundtracks for corporate videos.",
    type: "VIDEO", // Ensure this is a valid value of the AssetType enum
    status: "DOMANT", // Ensure this is a valid value of the Status enum
    image: null, // Optional field; set if you have an image URL or path

    adminId: "64c8d6f91c9d440000b94a2f", // Optional field; set to null if no admin is assigned
    interestedIds: ["64b8e6d41c2a000015a732ae"],

    fingerprint: undefined, // Optional field; set to null if no fingerprint is assigned

    watermark: {
      id: "64c8d6f91c9d440000e72f6b",
      assetId: "64c8d6f91c9d440000b94a2f", // Reference to the asset ID
      watermark: "ab987watermark",
    },
  },
  {
    id: "64c8d6f91c9d440000c93a3e",
    title: "Podcast Jingles",
    description:
      "Custom-made jingles for podcast introductions and transitions.",
    type: "MUSIC", // Ensure this is a valid value of the AssetType enum
    status: "DOMANT", // Ensure this is a valid value of the Status enum
    image: null, // Optional field; set if you have an image URL or path

    adminId: "64b8e6d41c2a000015a732af",
    interestedIds: [],

    fingerprint: {
      id: "64c8d6f91c9d440000f92d7e",
      assetId: "64c8d6f91c9d440000c93a3e", // Reference to the asset ID
      fingerprint: {
        hash: "e99a18c428cb38d5f260853678922e03",
      },
    },

    watermark: undefined, // Optional field; set to null if no watermark is assigned
  },
];

const adminOptions = async (
  inputValue: string
): Promise<{ label: string; value: string }[]> => {
  try {
    const response = await fetch(`api/dashboard/users?search=${inputValue}`);

    if (!response.ok) {
      console.error(`ERROR:`, httpCodes[response.status]);
      return []; // Return empty array if response is not ok
    }

    const data = await response.json();

    if (data.success) {
      const adminOptions: { label: string; value: string }[] = data.success.map(
        ({ email, name, id }: { email: string; name: string; id: string }) => ({
          label: `${name} - ${email}`,
          value: id,
        })
      );
      return adminOptions; // Return options if data.success is available
    } else {
      return []; // Return empty array if data.success is not available
    }
  } catch (error) {
    console.error(`Fetch error:`, error);
    return []; // Return empty array on exception
  }
};
