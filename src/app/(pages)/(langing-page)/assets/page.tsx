"use client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/components/providers";
import { TableViewLayout } from "@/components/pages/table";
import { Asset, User } from "@/lib/prisma/types";

export default function LegislationsPage() {
  const { assets } = useContext(DataContext);

  // render
  return (
    <TableViewLayout
      title="Legislations"
      link="Legislations"
      desc="Bills and Acts of Kenyan Parliament"
      items={assets.map(({ id, title, description, status, type }) => ({
        id,
        title,
        description,
        status,
        type,
      }))}
      headers={[
        "Icon",
        "Legislation",
        "Description",
        "Status",
        "Type",
        "Contributions",
      ]}
    />
  );
}
