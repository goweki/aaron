"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { Music } from "lucide-react";
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
  title: z.string(),
  type: z.nativeEnum(AssetType, {
    errorMap: () => ({ message: "Invalid asset type" }),
  }),
  adminId: z.string(),
  image: z.string().nullable(), // Nullable string for image
  description: z.string().nullable(), // Nullable string for description
  // interestedIds: z.array(z.string()) // Array of strings
});

// Infer the form data type from the Zod schema
type AssetFormData = z.infer<typeof assetFormSchema>;

const AssetForm: React.FC<{ asset?: Asset }> = ({ asset }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof assetFormSchema>>({
    resolver: zodResolver(assetFormSchema),
    defaultValues: {
      title: asset?.title || "",
      type: asset?.type || AssetType.MUSIC,
      adminId: asset?.adminId || "",
      description: asset?.description || "",
    },
  });

  // State for selected image
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Submit handler
  const onSubmit = (data: AssetFormData) => {
    console.log("Form Data:", data);
    // Handle form submission
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full p-4"
      >
        <fieldset className="grid gap-6 p-4">
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
                    className="placeholder:italic  placeholder:opacity-50"
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
                    <SelectTrigger>
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
                  // onChange={(val) => form.setValue("adminId", val.value)}
                  onChange={(selectedOption) =>
                    form.setValue("adminId", selectedOption.value)
                  }
                  defaultValue={form.getValues("adminId")}
                  defaultOptions={[]}
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
          <Button type="submit">Submit</Button>
        </fieldset>
      </form>
    </Form>
  );
};

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

export default AssetForm;
