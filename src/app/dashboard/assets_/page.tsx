"use client";
import { useContext, useEffect, useState } from "react";
import { Asset, User } from "@/lib/prisma/types";
import { DashboardContext } from "@/components/providers";

export default function LegislationsPage() {
  const { data } = useContext(DashboardContext);

  // render
  return <main>Assets</main>;
}
