"use client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/components/providers";
import { TableViewLayout } from "@/components/pages/table";
import { Legislation, Mp } from "@/lib/prisma/types";
export default function MpsPage() {
  const { mps } = useContext<{
    mps: Mp[];
    legislations: Legislation[];
  }>(DataContext);

  // render
  return (
    <TableViewLayout
      title="Members of Parliament"
      link="Mps"
      desc="List of the elected Members of the Kenyan Parliament as sourced from parliament.co.ke"
      items={mps.map(
        ({
          id,
          photoUrl,
          lastName,
          firstName,
          otherName,
          party,
          constituency,
        }) => ({
          id,
          photoUrl,
          lastName,
          firstName,
          otherName,
          party,
          constituency,
        })
      )}
      headers={[
        "Photo",
        "Name",
        "Party",
        "Constituency",
        "County",
        "Contributions",
      ]}
    />
  );
}
