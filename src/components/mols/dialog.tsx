"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export function DialogPopup({
  triggerLabel = "trigger",
  buttonVariant = "default",
  children = def_children,
  title = "Sample Title",
  description = "Make changes to your profile here. Click save when you&apos;re done.",
}: {
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  triggerLabel?: string;
  title?: string;
  description?: string;
  children?: React.ReactElement;
}) {
  const [open, setOpen] = useState(false);

  // Ensure there's only one child, and pass the onSubmit prop to that child
  const singleChild = React.Children.only(children);
  // Clone the single child and pass onSubmit as a prop
  const childWithClose = React.cloneElement(singleChild, {
    close: () => setOpen(false),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} type="button">
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {childWithClose}
      </DialogContent>
    </Dialog>
  );
}

const def_children = (
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Name
      </Label>
      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="username" className="text-right">
        Username
      </Label>
      <Input id="username" defaultValue="@peduarte" className="col-span-3" />
    </div>
  </div>
);
