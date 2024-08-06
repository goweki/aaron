"use client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/components/providers";
import { TableViewLayout } from "@/components/pages/table";
import { Asset, User } from "@/lib/prisma/types";
export default function MpsPage() {
  const { users } = useContext(DataContext);

  // render
  return (
    <TableViewLayout
      title="Members of Parliament"
      link="Mps"
      desc="List of the elected Members of the Kenyan Parliament as sourced from parliament.co.ke"
      items={users.map(({ id, avatar, name, assets }) => ({
        id,
        avatar,
        name,
        assets,
      }))}
      headers={["Photo", "Name", "Assets"]}
    />
  );
}
