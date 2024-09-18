import { TabsContent } from "@/components/ui/tabs";
import OverviewTab from "./_tab_overview";
import AssetsTab from "./_tab_assets";
import { Reports } from "./_tab_reports";
import { Notifications } from "./_tab_notifications";

export default function TabWrapper({ tabValue }: { tabValue: string }) {
  return (
    <TabsContent value="overview" className="space-y-4">
      {tabValue === "overview" ? (
        <OverviewTab />
      ) : tabValue === "assets" ? (
        <AssetsTab />
      ) : (
        <></>
      )}
    </TabsContent>
  );
}
