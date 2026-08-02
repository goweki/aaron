import ViewLayout from "@/components/views/view-layout";
import ErrorView from "@/components/views/error-view";
import AssetInspector from "@/components/views/asset-inspector";
import { getAssetByIdAction } from "@/actions/dashboard-actions/inspection-actions";

interface Props {
  params: {
    assetID: string;
  };
}

export default async function AssetDetailPage({ params }: Props) {
  const assetId = params.assetID;
  const assetRes = await getAssetByIdAction(assetId);

  if (!assetRes.ok) {
    return <ErrorView error={assetRes.error} />;
  }

  if (!assetRes.data) {
    return <ErrorView error="Asset not found." />;
  }

  return (
    <ViewLayout
      title="Asset Inspector"
      description="Review acoustic fingerprint metadata, watermark status, and detection associations for this track."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Assets", href: "/dashboard/assets" },
        { label: assetRes.data.title },
      ]}
    >
      <AssetInspector asset={assetRes.data} />
    </ViewLayout>
  );
}
