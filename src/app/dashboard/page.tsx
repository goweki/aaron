"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  LibraryBig,
  LucideProps,
  Radio,
  SearchCheck,
} from "lucide-react";
import SimpleLineChart from "@/components/mols/simpleLineChart";
import { RecentDetections } from "@/components/mols/recent-detections";
import { DashboardContext } from "@/components/providers";
import { useContext } from "react";

export default function OverviewPage() {
  const {
    data: { assets },
    refreshData,
  } = useContext(DashboardContext);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Total Assets"
          Icon={LibraryBig}
          value={assets.length}
          description="+2 from last month"
        />
        <SummaryCard
          title="Livestreams"
          Icon={Radio}
          value={3}
          description="Possible detections"
        />
        <SummaryCard
          title="Detections"
          Icon={SearchCheck}
          value={6}
          description="+1 from last month"
        />

        <SummaryCard
          title="Notifications"
          Icon={Bell}
          value={1}
          description="2 new notifications"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Trend</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 h-full max-h-96">
            <SimpleLineChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Detections</CardTitle>
            <CardDescription>Your most recent detections</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentDetections />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const SummaryCard = ({
  title,
  Icon,
  value,
  description,
}: {
  title: string;
  Icon: React.FC<LucideProps>;
  value: number;
  description: string;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
