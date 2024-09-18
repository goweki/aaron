import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tab from "./_tab";
import WithTitleLayout from "@/components/layouts/withNavBar_title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OverviewTab from "./_tab_overview";
import AssetsTab from "./_tab_assets";
// import { UserNav } from "@/app/(app)/examples/dashboard/components/user-nav";

export default function DashboardPage() {
  return (
    <WithTitleLayout title="Dashboard">
      <div className="sm:hidden w-full h-full flex">
        <div className="flex flex-col flex-1">
          <span className="inline-block m-auto italic">
            Please use a wider screen for better viewing
          </span>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <>
          <OverviewTab />
          <AssetsTab />
        </>
      </Tabs>
    </WithTitleLayout>
  );
}
