"use client";

import { Bird, Music, Turtle } from "lucide-react";
import AsyncSelect from "react-select/async";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AssetType } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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

export default function AssetsTab() {
  const pathname = usePathname();
  const [assets, setAssets] = useState<any[]>(dummyAssets);
  const [selectedAsset, setAsset] = useState<any>();

  return (
    <TabsContent value="assets" className="space-y-4 pt-4">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  selectedAsset?.id === asset.id
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-transparent hover:underline",
                  "justify-start"
                )}
              >
                {asset.title}
              </div>
            ))}
          </nav>
        </aside>
        <Card className="w-full">
          <div className="space-y-6">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 p-4">
                  {/* DROPDOWN */}
                  {/* <div className="grid gap-3">
                    <Label htmlFor="model">Asset Title</Label>
                    <Select>
                      <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="genesis">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Genesis
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="explorer">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Explorer
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Quantum
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                  {/* TITLE input */}
                  <div id="asset-title-input-group" className="grid gap-3">
                    <Label htmlFor="asset-title">Asset Title</Label>
                    <Input
                      id="asset-title"
                      type="test"
                      placeholder="Title"
                      className="placeholder:italic"
                    />
                  </div>
                  {/* TYPE input */}
                  <div id="asset-type-input-group" className="grid gap-3">
                    <Label htmlFor="model">Type</Label>
                    <Select>
                      <SelectTrigger
                        id="asset-type"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(AssetType).map((type) => (
                          <SelectItem key={type} value={type}>
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Music className="size-5" />
                              <div className="grid gap-0.5">
                                <p>
                                  Audio{" "}
                                  <span className="font-medium text-foreground">
                                    Music
                                  </span>
                                </p>
                                <p className="text-xs" data-description>
                                  Copyright music file
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                        {/* <SelectItem value="explorer">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Explorer
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Quantum
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem> */}
                      </SelectContent>
                    </Select>
                  </div>

                  {/*  */}
                  {/* Administrator input */}
                  <div id="admin-input-group" className="grid gap-3">
                    <Label htmlFor="admin-id">Asset Title</Label>
                    <AsyncSelect loadOptions={adminOptions} />
                  </div>
                  {/*  */}
                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-p">Top P</Label>
                      <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Top K</Label>
                      <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                  </div>
                </fieldset>
                {/* <Separator /> */}
                <fieldset className="grid gap-6 p-4">
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="assistant">Assistant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="You are a..."
                      className="min-h-[9.5rem]"
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </TabsContent>
  );
}

const dummyAssets = [
  {
    id: "64c8d6f91c9d440000a65a1d",
    title: "Summer Vibes",
    description: "A collection of summer-themed music tracks.",
    type: "MUSIC",
    status: "active",
    adminId: "64b8e6d41c2a000015a732ab",
    interestedIds: ["64b8e6d41c2a000015a732ac", "64b8e6d41c2a000015a732ad"],
    fingerprint: {
      id: "64c8d6f91c9d440000f82c3e",
      hash: "d41d8cd98f00b204e9800998ecf8427e",
      createdAt: "2024-09-01T12:34:56.000Z",
    },
    watermark: {
      id: "64c8d6f91c9d440000d92c4a",
      pattern: "xy123pattern",
      createdAt: "2024-09-02T08:23:45.000Z",
    },
  },
  {
    id: "64c8d6f91c9d440000b94a2f",
    title: "Corporate Presentation",
    description: "Background music and soundtracks for corporate videos.",
    type: "VIDEO",
    status: "dormant",
    adminId: null,
    interestedIds: ["64b8e6d41c2a000015a732ae"],
    fingerprint: null,
    watermark: {
      id: "64c8d6f91c9d440000e72f6b",
      pattern: "ab987watermark",
      createdAt: "2024-09-05T10:15:30.000Z",
    },
  },
  {
    id: "64c8d6f91c9d440000c93a3e",
    title: "Podcast Jingles",
    description:
      "Custom-made jingles for podcast introductions and transitions.",
    type: "MUSIC",
    status: "dormant",
    adminId: "64b8e6d41c2a000015a732af",
    interestedIds: [],
    fingerprint: {
      id: "64c8d6f91c9d440000f92d7e",
      hash: "e99a18c428cb38d5f260853678922e03",
      createdAt: "2024-08-28T09:12:11.000Z",
    },
    watermark: null,
  },
];

// const loadAdministratorOptions = async (
//   inputValue: string,
//   callback: (options: { label: string; value: string }[]) => void
// ) => {
//   try {
//     const response = await fetch(`api/dashboard/users?search=${inputValue}`);

//     if (!response.ok) {
//       console.error(`ERROR:`, httpCodes[response.status]);
//       return callback([]); // Call callback with empty array on error
//     }

//     const data = await response.json();

//     if (data.success) {
//       const adminOptions: { label: string; value: string }[] = data.success.map(
//         ({ name, id }: { name: string; id: string }) => ({
//           label: name,
//           value: id,
//         })
//       );
//       return callback(adminOptions); // Assuming 'data.success' is an array of options
//     } else {
//       return callback([]); // Call callback with empty array if response.success is not available
//     }
//   } catch (error) {
//     console.error(`Fetch error: ${error}`);
//     return callback([]); // Call callback with empty array on exception
//   }
// };

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
        ({ name, id }: { name: string; id: string }) => ({
          label: name,
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
