"use client";

import {
  Bell,
  Fingerprint,
  Library,
  type LucideIcon,
  Radio,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SimpleLineChart from "@/components/mols/simpleLineChart";
import { RecentDetections } from "@/components/mols/recent-detections";
import type { AssetWithRelations, BroadcasterWithRelations } from "@/actions/dashboard-actions/dashboard-types";

export default function DashboardOverview({
  data,
}: {
  data: {
    assets: AssetWithRelations[];
    broadcasters: BroadcasterWithRelations[];
  };
}) {
  const detectionCount = data.broadcasters.reduce(
    (count, broadcaster) => count + broadcaster.detections.length,
    0,
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Cataloged Assets" Icon={Library} value={data.assets.length} description="Acoustic fingerprint index" />
        <SummaryCard title="Active Broadcasters" Icon={Radio} value={data.broadcasters.length} description="Configured monitoring channels" />
        <SummaryCard title="Broadcast Matches" Icon={Fingerprint} value={detectionCount} description="Recorded acoustic matches" />
        <SummaryCard title="Notifications" Icon={Bell} value={0} description="No operational notifications" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader><CardTitle>Detection Trend</CardTitle></CardHeader>
          <CardContent className="h-full max-h-96 pl-2"><SimpleLineChart /></CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader><CardTitle>Recent Broadcast Matches</CardTitle></CardHeader>
          <CardContent><RecentDetections /></CardContent>
        </Card>
      </div>
    </div>
  );
}

function SummaryCard({ title, Icon, value, description }: { title: string; Icon: LucideIcon; value: number; description: string }) {
  return <Card><CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">{title}</CardTitle><Icon className="h-4 w-4 text-indigo-500" /></CardHeader><CardContent><div className="text-2xl font-bold">{value}</div><p className="text-xs text-muted-foreground">{description}</p></CardContent></Card>;
}
