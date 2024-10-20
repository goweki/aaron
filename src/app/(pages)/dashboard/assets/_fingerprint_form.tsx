"use client";

import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { object, z } from "zod";
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
import { AssetType, AudioFingerprint, Prisma, Status } from "@prisma/client";
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
import { ProgressBar } from "@/components/mols/progressbar";
import toast from "react-hot-toast";

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

const fingerprintFormSchema = z.object({
  assetId: z.string(), // assetId is a string
  fingerprint: z.array(z.array(z.number())), // fingerprint is a any[]
});

export default function FingerprintForm({
  asset,
  _audioFingerprint,
  close,
  updateFingerprint,
}: {
  asset: { id: string; title: string; file: string };
  _audioFingerprint?: AudioFingerprint;
  updateFingerprint: (fingerprint: any[]) => void;
  close: () => void;
}) {
  const [isUpdated, setIsAssetUpdated] = useState<boolean>(false);
  const [fingerprint, setFingerprint] = useState<{
    status: string;
    percentage: number;
    file: File | null;
  }>({
    status: "OLD",
    percentage: 100,
    file: null,
  });

  // form Obj
  const form = useForm<z.infer<typeof fingerprintFormSchema>>({
    resolver: zodResolver(fingerprintFormSchema),
    defaultValues: {
      assetId: asset.id,
      fingerprint: (_audioFingerprint?.fingerprint as any[]) ?? [], // Convert null to empty array and assert type
    },
  });
  //

  // Watch the form values as they change
  const formValues = useWatch({
    control: form.control,
  });

  // Compare function: returns true if any field is different
  function isFormModified(
    formValues: any,
    _audioFingerprint?: AudioFingerprint
  ) {
    if (!_audioFingerprint) {
      console.log("No existing fingerprint, new: ", formValues.fingerprint);
      return !!formValues.fingerprint;
    }

    // Check if any form value differs from the corresponding asset field
    if (
      typeof _audioFingerprint.fingerprint !== "object" ||
      !Array.isArray(_audioFingerprint.fingerprint)
    ) {
      return false;
    }

    return (
      formValues.fingerprint !==
      (_audioFingerprint.fingerprint as Prisma.JsonArray)
    );
  }

  useEffect(() => {
    console.log(
      "Input: change?:",
      isFormModified(formValues, _audioFingerprint)
    );
    setIsAssetUpdated(isFormModified(formValues, _audioFingerprint));
  }, [formValues, _audioFingerprint]);

  async function generateFingerprint() {
    if (!fingerprint.file) {
      toast.error("No File Selected");
      return;
    }
    setFingerprint((prev) => ({ ...prev, status: "LOADING" }));
    const fileData = new FormData();
    fileData.append("file", fingerprint.file);
    fileData.append("assetId", asset.id);
    try {
      // POST request to generate a fingerprint
      const res = await fetch("/api/dashboard/fingerprint", {
        method: "POST",
        body: fileData, // The audio file or stream
      }).then(async (res_) => {
        if (res_?.ok) {
          return await res_.json();
        } else {
          console.error(`ERROR: `, res_);
          toast.error(httpCodes[res_?.status] ?? "Unknown error");
        }
      });

      if (res?.SUCCESS) {
        toast.success(res.SUCCESS);
        form.setValue("fingerprint", res.SUCCESS);
        setFingerprint((prev) => ({ ...prev, status: "NEW" }));
        updateFingerprint(res.SUCCESS);
        close();
      } else {
        // add error to isLoading, ie- UIstate
        toast.error(Object.entries(res).join(" : ") || "Unknown error");
        setFingerprint((prev) => ({ ...prev, status: "OLD" }));
      }
    } catch (error) {
      setFingerprint((prev) => ({ ...prev, status: "OLD" }));
    }
  }

  function stopGeneratingFingerprint() {
    //stop generating fingerprint
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      // Check file type
      if (!selectedFile.type.startsWith("audio/")) {
        toast.error("Please upload a valid audio file.");
        setFingerprint((prev) => ({ ...prev, file: null }));
        return;
      }

      // Check file size (5MB = 5 * 1024 * 1024 bytes)
      const maxSize = 5 * 1024 * 1024;
      if (selectedFile.size > maxSize) {
        toast.error("File size must be less than 5MB.");
        setFingerprint((prev) => ({ ...prev, file: null }));
        return;
      }

      // Clear any errors and set the file
      setFingerprint((prev) => ({ ...prev, file: selectedFile }));
    }
  }

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 w-full p-4"
      >
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            New Fingerprint
          </legend>
          {!asset.file && (
            <div className="grid gap-3">
              <Label htmlFor="file">File</Label>
              <Input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="border-border"
              />
            </div>
          )}
          <div className="grid gap-3">
            <Label htmlFor="sensitivity">Sensitivity</Label>
            <Select
              onValueChange={(value) =>
                setFingerprint((prev) => ({
                  ...prev,
                  sensitivity: value,
                }))
              }
              defaultValue="standard"
            >
              <SelectTrigger
                id="sensitivity"
                className="items-start [&_[data-description]]:hidden border-border"
                // className="border-border"
              >
                <SelectValue placeholder="Select sensitivity " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Rabbit className="size-5 opacity-75" />
                    <div className="grid gap-0.5">
                      <p className="font-medium text-foreground">High</p>
                      <p className="text-xs" data-description>
                        Uses more time and resources
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="standard">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Bird className="size-5 opacity-75" />
                    <div className="grid gap-0.5">
                      <p className="font-medium text-foreground">Standard</p>
                      <p className="text-xs" data-description>
                        Recommended
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="low">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Turtle className="size-5 opacity-75" />
                    <div className="grid gap-0.5">
                      <p className="font-medium text-foreground">Low</p>
                      <p className="text-xs" data-description>
                        Takes up least computing resources
                      </p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </fieldset>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            type="button"
            className="inline border-primary hover:border-transparent col-span-1"
            onClick={generateFingerprint}
          >
            Fingerprint
          </Button>

          <div
            className={
              fingerprint.status === "OLD" || fingerprint.status === "NEW"
                ? "hidden"
                : "hidden sm:col-span-1 md:col-span-2 sm:flex"
            }
          >
            <ProgressBar progress={fingerprint.percentage} />
          </div>
        </div>
        <fieldset></fieldset>
      </form>
    </Form>
  );
}
