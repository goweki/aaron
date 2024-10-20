"use client";

import { useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { httpCodes } from "@/lib/refDictionary";
import SelectAsync from "@/components/mols/selectAsync";
import { Bird, EllipsisVertical, Music, Rabbit, Turtle } from "lucide-react";
import { AssetType, Status } from "@prisma/client";
import { Asset } from "@/lib/prisma/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { titleCase } from "@/lib/utils";
import { InputImage } from "@/components/mols/InputImage";
import { useEdgeStore } from "@/lib/edgestore";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogPopup } from "@/components/mols/dialog";
import FingerprintForm from "./_fingerprint_form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DashboardContext } from "@/components/providers";

// Define the Zod schema for form validation
// const assetFormSchema = z.object({
//   assetTitle: z.string().min(1, "required"),
//   assetType: z.nativeEnum(AssetType, {
//     errorMap: () => ({ message: "Invalid asset type" }),
//   }),
//   adminId: z.string().min(1, "required"),
//   image: z.string().optional(),
//   description: z.string().optional(),
//   // .min(10, "must be at least 10 characters long"),
// });
const assetFormSchema = z.object({
  title: z.string().min(1, " required"),
  type: z.nativeEnum(AssetType, {
    errorMap: () => ({ message: " invalid" }),
  }),
  adminId: z.string().min(1, " required"),
  image: z.string().optional(),
  description: z.string().optional(),
  fingerprint: z.array(z.any()).optional(), // Define as optional if needed
});

const AssetForm: React.FC<{ asset?: Asset }> = ({ asset }) => {
  const {
    data: { assets },
    refreshData,
  } = useContext(DashboardContext);

  const router = useRouter();
  // form bj
  const form = useForm<z.infer<typeof assetFormSchema>>({
    resolver: zodResolver(assetFormSchema),
    defaultValues: {
      title: asset?.title || "",
      type: asset?.type || undefined,
      adminId: asset?.adminId || "",
      description: asset?.description || "",
    },
  });

  // State for selected image
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isUpdated, setIsAssetUpdated] = useState(false);

  // Watch the form values as they change
  const formValues = useWatch({
    control: form.control,
  });

  // Compare function: returns true if any field is different
  function isFormModified(formValues: any, asset: Asset | undefined) {
    if (!asset)
      return (
        !!formValues.title ||
        !!formValues.type ||
        !!formValues.adminId ||
        !!formValues.description ||
        !!formValues.fingerprint
      );

    // Check if any form value differs from the corresponding asset field
    return (
      formValues.title !== asset.title ||
      formValues.type !== asset.type ||
      formValues.adminId !== asset.adminId ||
      formValues.description !== asset.description ||
      !!formValues.fingerprint
    );
  }

  useEffect(() => {
    // console.log("New user input: change?:", isFormModified(formValues, asset));
    setIsAssetUpdated(isFormModified(formValues, asset));
  }, [formValues, asset]);

  // Submit handler
  const handleSubmit = async (data: z.infer<typeof assetFormSchema>) => {
    console.log("Asset Form Data:", data);
    console.log("_asset Data:", asset);
    const body = asset ? { ...data, id: asset.id } : data;
    // FORM SUBMISSION
    const fetchOptions = {
      method: asset ? "PUT" : "POST",
      body: JSON.stringify(body),
      // headers: { 'Content-Type': 'application/json' },
      // next: { revalidate: 3600 }
    };
    const response = await fetch("/api/dashboard/assets", fetchOptions).then(
      async (res_) => {
        if (res_.ok) {
          return await res_.json();
        } else {
          console.log(`ERROR: ` + JSON.stringify(res_));
          toast.error(httpCodes[res_.status]);
        }
      }
    );
    if (response?.SUCCESS) {
      toast.success(response?.SUCCESS);
      // router.push("/dashboard/assets");
      refreshData();
    } else {
      console.error("error in asset form: ", response);
      toast.error(Object.entries(response).join(" : ") || "Unknown error");
    }
  };

  const handleDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    if (!asset) {
      console.log("No asset selected for deletion...", asset);
      return;
    }
    console.log("Deleting asset... ", asset);
    // FORM SUBMISSION
    const fetchOptions = {
      method: "DELETE",
    };
    const response = await fetch(
      `/api/dashboard/assets?assetId=${asset.id}`,
      fetchOptions
    ).then(async (res_) => {
      if (res_.ok) {
        return await res_.json();
      } else {
        console.error(`ERROR: ` + JSON.stringify(res_));
        toast.error(httpCodes[res_.status]);
      }
    });
    if (response?.SUCCESS) {
      toast.success(response?.SUCCESS);
      router.push("/dashboard/assets");
    } else {
      console.error("error in asset form: ", response);
      toast.error(Object.entries(response).join(" : ") || "Unknown error");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 w-full p-4"
      >
        <fieldset className="flex" disabled={!asset}>
          <div className="inline-block ml-auto mb-2 space-x-4">
            <DialogPopup
              title={
                asset?.fingerprint
                  ? "Re-generate fingerprint"
                  : "Generate Fingerprint"
              }
              description={`Asset: ${asset?.title}`}
              buttonVariant="ghost"
              triggerLabel={
                asset?.fingerprint
                  ? "Re-generate fingerprint"
                  : "Generate Fingerprint"
              }
            >
              {asset && (
                <FingerprintForm
                  close={() => null}
                  asset={{
                    title: asset.title,
                    id: asset.id,
                    file: asset.file || "",
                  }}
                  updateFingerprint={(__fingerprint: any[]) => {
                    form.setValue("fingerprint", __fingerprint);
                  }}
                />
              )}
            </DialogPopup>
            <DialogPopup
              buttonVariant="ghost"
              triggerLabel="Watermark"
            ></DialogPopup>
            <Button type="button" onClick={handleDelete} variant="destructive">
              Delete
            </Button>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 p-4 !mt-0 border-t border-muted">
          {/* TITLE input */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Asset Title{" "}
                  <FormMessage className="pl-1 italic inline-block" />{" "}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sample name"
                    {...field}
                    className="placeholder:italic  placeholder:opacity-7"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* TYPE input */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Asset type{" "}
                  <FormMessage className="pl-1 italic inline-block" />{" "}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="SelectTrigger">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(AssetType).map(([key, value]) => (
                      // <SelectItem key={key} value={value}>
                      //   {titleCase(key)}
                      // </SelectItem>
                      <SelectItem key={key} value={key} className="">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Music className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Audio{" "}
                              <span className="font-medium text-foreground">
                                {titleCase(value)}
                              </span>
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* ADMINISTRATOR input */}
          <FormField
            control={form.control}
            name="adminId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Administrator{" "}
                  <FormMessage className="pl-1 italic inline-block" />{" "}
                </FormLabel>
                <SelectAsync
                  loadOptions={adminOptions}
                  placeholder="Select an administrator"
                  onChange={(selectedOption) =>
                    form.setValue("adminId", selectedOption.value)
                  }
                  defaultOptions={
                    asset
                      ? [
                          {
                            label: `${asset.administrator?.name} - ${asset.administrator?.email}`,
                            value: asset.administrator?.id,
                          },
                        ]
                      : []
                  }
                  defaultValue={
                    asset
                      ? {
                          label: `${asset.administrator?.name} - ${asset.administrator?.email}`,
                          value: asset.administrator?.id,
                        }
                      : null
                  }
                />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            {/* IMAGE input */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Image <FormMessage className="pl-1 italic inline-block" />{" "}
                  </FormLabel>
                  <InputImage
                    // {...field}
                    _photo={form.getValues("image") || "" || ""}
                    setPhoto={async (_imageFile: File | null) => {
                      setSelectedImage((image) => image);
                    }}
                  />
                </FormItem>
              )}
            />
            {/* DESCRIPTION input */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="description">
                    Description{" "}
                    <FormMessage className="pl-1 italic inline-block" />{" "}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.value ?? ""}
                      placeholder="Asset description..."
                      className="min-h-[9.5rem] placeholder:italic placeholder:opacity-50"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </fieldset>
        <fieldset className="grid gap-6 p-4">
          <Button type="submit" disabled={!isUpdated}>
            {asset ? "Edit Asset" : "Create Asset"}
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};

const adminOptions = async (
  inputValue: string
): Promise<{ label: string; value: string }[]> => {
  try {
    const response = await fetch(`/api/dashboard/users?search=${inputValue}`);

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

export default AssetForm;

// const fingerprintFormSchema = z.object({
//   title: z.string().min(1, " required"),
//   type: z.nativeEnum(AssetType, {
//     errorMap: () => ({ message: " invalid" }),
//   }),
//   adminId: z.string().min(1, " required"),
//   image: z.string().optional(),
//   description: z.string().optional(),
//   // interestedIds: z.array(z.string()) // Array of strings
// });

// function FingerprintForm({}) {
//   return (
//     <div className="relative hidden flex-col items-start gap-8 md:flex">
//       <form className="grid w-full items-start gap-6">
//         <fieldset className="grid gap-6 rounded-lg border p-4">
//           <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
//           <div className="grid gap-3">
//             <Label htmlFor="model">Model</Label>
//             <Select>
//               <SelectTrigger
//                 id="model"
//                 className="items-start [&_[data-description]]:hidden"
//               >
//                 <SelectValue placeholder="Select a model" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="genesis">
//                   <div className="flex items-start gap-3 text-muted-foreground">
//                     <Rabbit className="size-5" />
//                     <div className="grid gap-0.5">
//                       <p>
//                         Neural{" "}
//                         <span className="font-medium text-foreground">
//                           Genesis
//                         </span>
//                       </p>
//                       <p className="text-xs" data-description>
//                         Our fastest model for general use cases.
//                       </p>
//                     </div>
//                   </div>
//                 </SelectItem>
//                 <SelectItem value="explorer">
//                   <div className="flex items-start gap-3 text-muted-foreground">
//                     <Bird className="size-5" />
//                     <div className="grid gap-0.5">
//                       <p>
//                         Neural{" "}
//                         <span className="font-medium text-foreground">
//                           Explorer
//                         </span>
//                       </p>
//                       <p className="text-xs" data-description>
//                         Performance and speed for efficiency.
//                       </p>
//                     </div>
//                   </div>
//                 </SelectItem>
//                 <SelectItem value="quantum">
//                   <div className="flex items-start gap-3 text-muted-foreground">
//                     <Turtle className="size-5" />
//                     <div className="grid gap-0.5">
//                       <p>
//                         Neural{" "}
//                         <span className="font-medium text-foreground">
//                           Quantum
//                         </span>
//                       </p>
//                       <p className="text-xs" data-description>
//                         The most powerful model for complex computations.
//                       </p>
//                     </div>
//                   </div>
//                 </SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="grid gap-3">
//             <Label htmlFor="temperature">Temperature</Label>
//             <Input id="temperature" type="number" placeholder="0.4" />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="grid gap-3">
//               <Label htmlFor="top-p">Top P</Label>
//               <Input id="top-p" type="number" placeholder="0.7" />
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="top-k">Top K</Label>
//               <Input id="top-k" type="number" placeholder="0.0" />
//             </div>
//           </div>
//         </fieldset>
//         <fieldset className="grid gap-6 rounded-lg border p-4">
//           <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
//           <div className="grid gap-3">
//             <Label htmlFor="role">Role</Label>
//             <Select defaultValue="system">
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="system">System</SelectItem>
//                 <SelectItem value="user">User</SelectItem>
//                 <SelectItem value="assistant">Assistant</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </fieldset>
//       </form>
//     </div>
//   );
// }
