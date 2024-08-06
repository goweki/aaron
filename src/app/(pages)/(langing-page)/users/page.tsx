"use client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/components/providers";
import { Asset, User } from "@/lib/prisma/types";
export default function UsersPage() {
  const { users } = useContext(DataContext);

  // render
  return <main>Users</main>;
}
