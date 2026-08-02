import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import AssetsView from "@/components/views/assets-view";
import { getAssetsAction } from "@/actions/dashboard-actions/asset-actions";
import { UploadIcon } from "lucide-react";

export default async function AssetsPage() {
  const assetsRes = await getAssetsAction();

  if (!assetsRes.ok) {
    return <ErrorView error={assetsRes.error} />;
  }

  return (
    <ViewLayout
      title="Audio Catalog"
      description="Manage registered tracks, inspect acoustic fingerprint indices, monitor watermarks, and track playout history."
      actions={[
        {
          label: "Upload & Index Track",
          href: "/dashboard/assets/upload",
          icon: UploadIcon,
          variant: "default",
        },
      ]}
    >
      <AssetsView assets={assetsRes.data} />
    </ViewLayout>
  );
}
