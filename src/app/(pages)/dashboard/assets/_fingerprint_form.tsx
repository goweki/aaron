// "use client";

// import { BaseSyntheticEvent, useEffect, useState } from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { httpCodes } from "@/lib/refDictionary";
// import SelectAsync from "@/components/mols/selectAsync";
// import { Bird, EllipsisVertical, Music, Rabbit, Turtle } from "lucide-react";
// import { AssetType, AudioFingerprint, Prisma, Status } from "@prisma/client";
// import { Asset } from "@/lib/prisma/types";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { titleCase } from "@/lib/utils";
// import { InputImage } from "@/components/mols/InputImage";
// import { useEdgeStore } from "@/lib/edgestore";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Separator } from "@/components/ui/separator";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { DialogPopup } from "@/components/mols/dialog";

// export default function FingerprintForm({
//   asset,
//   audioFingerprint,
//   close,
// }: {
//   asset: { id: string; title: string };
//   audioFingerprint?: AudioFingerprint;
//   close: () => void;
// }) {
//   const [isUpdated, setIsFingerprintUpdated] = useState(false);
//   const [newFingerprint, setNewFingerprint] = useState<Number[][]>();

//   // Compare function: returns true if any field is different
//   function isFormModified(
//     newFingerprint: Number[][],
//     _audioFingerprint?: AudioFingerprint
//   ) {
//     if (!_audioFingerprint) return !!newFingerprint;

//     // Check if any form value differs from the corresponding asset field
//     if (
//       typeof _audioFingerprint.fingerprint !== "object" ||
//       !Array.isArray(_audioFingerprint.fingerprint)
//     )
//       return false;

//     return (
//       newFingerprint !== (_audioFingerprint.fingerprint as Prisma.JsonArray)
//     );
//   }

//   useEffect(() => {
//     // console.log("New user input: change?:", isFormModified(formValues, asset));
//     if (newFingerprint)
//       setIsFingerprintUpdated(isFormModified(newFingerprint, audioFingerprint));
//   }, [newFingerprint, audioFingerprint]);

//   const handleSubmit = (
//     data: z.infer<typeof fingerprintFormSchema>,
//     e: any
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Fingerprint Form Data:", data);
//     console.log("_fingerprint Data:", audioFingerprint);
//     close();

//     // FORM SUBMISSION
//   };

//   return (
//     <form className="space-y-8 w-full p-4">
//       <p>{asset.title}</p>
//       <fieldset className="grid gap-6 rounded-lg border p-4">
//         <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
//         <div className="grid gap-3">
//           <Label htmlFor="model">Model</Label>
//           <Select>
//             <SelectTrigger
//               id="model"
//               className="items-start [&_[data-description]]:hidden"
//             >
//               <SelectValue placeholder="Select a model" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="genesis">
//                 <div className="flex items-start gap-3 text-muted-foreground">
//                   <Rabbit className="size-5" />
//                   <div className="grid gap-0.5">
//                     <p>
//                       Neural{" "}
//                       <span className="font-medium text-foreground">
//                         Genesis
//                       </span>
//                     </p>
//                     <p className="text-xs" data-description>
//                       Our fastest model for general use cases.
//                     </p>
//                   </div>
//                 </div>
//               </SelectItem>
//               <SelectItem value="explorer">
//                 <div className="flex items-start gap-3 text-muted-foreground">
//                   <Bird className="size-5" />
//                   <div className="grid gap-0.5">
//                     <p>
//                       Neural{" "}
//                       <span className="font-medium text-foreground">
//                         Explorer
//                       </span>
//                     </p>
//                     <p className="text-xs" data-description>
//                       Performance and speed for efficiency.
//                     </p>
//                   </div>
//                 </div>
//               </SelectItem>
//               <SelectItem value="quantum">
//                 <div className="flex items-start gap-3 text-muted-foreground">
//                   <Turtle className="size-5" />
//                   <div className="grid gap-0.5">
//                     <p>
//                       Neural{" "}
//                       <span className="font-medium text-foreground">
//                         Quantum
//                       </span>
//                     </p>
//                     <p className="text-xs" data-description>
//                       The most powerful model for complex computations.
//                     </p>
//                   </div>
//                 </div>
//               </SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="grid gap-3">
//           <Label htmlFor="temperature">Temperature</Label>
//           <Input id="temperature" type="number" placeholder="0.4" />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="grid gap-3">
//             <Label htmlFor="top-p">Top P</Label>
//             <Input id="top-p" type="number" placeholder="0.7" />
//           </div>
//           <div className="grid gap-3">
//             <Label htmlFor="top-k">Top K</Label>
//             <Input id="top-k" type="number" placeholder="0.0" />
//           </div>
//         </div>
//       </fieldset>
//       <fieldset className="grid gap-6 rounded-lg border p-4">
//         <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
//         <div className="grid gap-3">
//           <Label htmlFor="role">Role</Label>
//           <Select defaultValue="system">
//             <SelectTrigger>
//               <SelectValue placeholder="Select a role" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="system">System</SelectItem>
//               <SelectItem value="user">User</SelectItem>
//               <SelectItem value="assistant">Assistant</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </fieldset>
//       <fieldset>
//         <Button type="submit" disabled={!isUpdated}>
//           {audioFingerprint ? "Edit Fingerprint" : "Save Fingerprint"}
//         </Button>
//       </fieldset>
//     </form>
//   );
// }

"use client";

import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
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
import { DialogPopup } from "@/components/mols/dialog";
import { ProgressBar } from "@/components/mols/progressbar";
import generateFingerprint from "@/lib/fingerprint";
import toast from "react-hot-toast";
import AudioFingerprintClass from "@/lib/fingerprint";

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
  fingerprint: z.array(z.array(z.number())), // fingerprint is a number[][]
});

export default function FingerprintForm({
  asset,
  _audioFingerprint,
  close,
}: {
  asset: { id: string; title: string; file: string };
  _audioFingerprint?: AudioFingerprint;
  close: () => void;
}) {
  const AudioFPRef = useRef<AudioFingerprintClass | null>(null);
  const [isUpdated, setIsAssetUpdated] = useState(false);
  const [fingerprint, setFingerprint] = useState<{
    status: string;
    percentage: number;
    file: File | null;
    sensitivity: string;
    new: number[][] | null;
    old: number[][] | null;
  }>({
    status: "OK",
    percentage: 100,
    file: null,
    sensitivity: "standard",
    new: null,
    old:
      _audioFingerprint?.fingerprint &&
      typeof _audioFingerprint?.fingerprint === "object" &&
      Array.isArray(_audioFingerprint?.fingerprint)
        ? (_audioFingerprint.fingerprint as Prisma.JsonArray as number[][])
        : null,
  });

  // form Obj
  const form = useForm<z.infer<typeof fingerprintFormSchema>>({
    resolver: zodResolver(fingerprintFormSchema),
    defaultValues: {
      assetId: asset.id,
      fingerprint: (fingerprint.old as number[][]) ?? [], // Convert null to empty array and assert type
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
    if (!_audioFingerprint) return !!formValues.fingerprint;

    // Check if any form value differs from the corresponding asset field
    if (
      typeof _audioFingerprint.fingerprint !== "object" ||
      !Array.isArray(_audioFingerprint.fingerprint)
    )
      return false;

    return (
      formValues.fingerprint !==
      (_audioFingerprint.fingerprint as Prisma.JsonArray)
    );
  }

  useEffect(() => {
    // console.log("New user input: change?:", isFormModified(formValues, asset));
    setIsAssetUpdated(isFormModified(formValues, _audioFingerprint));
  }, [formValues, _audioFingerprint]);

  function handleSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Fingerprint Form Data:", formValues);
    // console.log("_fingerprint Data:", formValues);
    close();

    // FORM SUBMISSION
  }

  async function generateFingerprint() {
    if (!fingerprint.file) {
      toast.error("No File Selected");
      return;
    }

    let res_load = {};

    if (!AudioFPRef.current) {
      AudioFPRef.current = new AudioFingerprintClass({
        audioUrl: URL.createObjectURL(fingerprint.file),
      });
      res_load = await AudioFPRef.current.loadAudio();
    } else {
      res_load = await AudioFPRef.current.loadAudio(
        URL.createObjectURL(fingerprint.file)
      );
    }

    // audio loaded?
    if ((res_load as { SUCCESS: string }).SUCCESS) {
      toast.success("successfully loaded audio");
    } else {
      toast.error(Object.entries(res_load).join(": "));
      return;
    }

    try {
      setFingerprint((prev) => ({ ...prev, status: "generating" }));

      const fingerprint_ = await AudioFPRef.current.run((percentage_) =>
        setFingerprint((prev) => ({ ...prev, percentage: percentage_ }))
      );
      console.log("fingerprint: ", fingerprint_);
    } catch (error) {
      console.error("Error generating fingerprint:", error);
    } finally {
      setFingerprint((prev) => ({ ...prev, status: "OK", percentage: 100 }));
    }
  }

  function stopGeneratingFingerprint() {
    if (AudioFPRef.current) {
      AudioFPRef.current.stop();
    }
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {fingerprint.status === "OK" ? (
              <Button
                variant="outline"
                type="button"
                className="inline border-primary hover:border-transparent col-span-1"
                onClick={generateFingerprint}
              >
                Generate
              </Button>
            ) : (
              <Button
                variant="destructive"
                type="button"
                className="inline border-primary hover:border-transparent col-span-1"
                onClick={stopGeneratingFingerprint}
              >
                Stop
              </Button>
            )}
            {
              <div
                className={
                  fingerprint.status === "OK"
                    ? "hidden"
                    : "hidden sm:col-span-1 md:col-span-2 sm:flex"
                }
              >
                <ProgressBar progress={fingerprint.percentage} />
              </div>
            }
          </div>
          {/* <div className="grid gap-3">
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
          </div> */}
        </fieldset>
        {/* <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
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
        </fieldset> */}
        <fieldset>
          <Button
            type="button"
            disabled={!isUpdated || !fingerprint.new}
            onClick={handleSubmit}
          >
            {_audioFingerprint ? "Edit Fingerprint" : "Save Fingerprint"}
          </Button>
        </fieldset>
      </form>
    </Form>
  );
}
