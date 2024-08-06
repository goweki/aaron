"use client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/components/providers";
import { Asset, User } from "@/lib/prisma/types";

export default function LegislationsPage() {
  const { assets } = useContext(DataContext);

  // render
  return <main>Assets</main>;
}
