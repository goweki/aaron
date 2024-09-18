"use client";

import SimpleLineChart from "@/components/mols/simpleLineChart";
import { RecentDetections } from "@/components/mols/recent-detections";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import {
  Activity,
  LucideProps,
  Presentation,
  CreditCard,
  GraduationCap,
  Menu,
  LibraryBig,
  Search,
  Users,
} from "lucide-react";

export default function OverviewTab() {
  return (
    <TabsContent value="overview" className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Total Assets"
          Icon={LibraryBig}
          value={12}
          description="+2 from last month "
        />
        <SummaryCard
          title="Asset Detections"
          Icon={Activity}
          value={3}
          description="+1 from last month"
        />
        <SummaryCard
          title="Leads"
          Icon={LibraryBig}
          value={12}
          description="Possible detections"
        />
        <SummaryCard
          title="Notifications"
          Icon={Activity}
          value={3}
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
    </TabsContent>
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
        <div className="text-2xl font-bold">12</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
