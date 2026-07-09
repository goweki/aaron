"use client";
import { useContext, useEffect, useState } from "react";
import { DashboardContext, OpenContext } from "@/components/providers";

export default function UsersPage() {
  const { data } = useContext(DashboardContext);

  // render
  return <main>Users</main>;
}
