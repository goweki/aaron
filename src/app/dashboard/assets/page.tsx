import AssetsView from "@/components/views/assets-view";
import { getAssetsAction } from "@/actions/dashboard-actions/asset-actions";
import ErrorView from "@/components/views/error-view";

export default async function AssetsPage() {
  const assetsRes = await getAssetsAction();

  if (!assetsRes.ok) {
    return <ErrorView error={assetsRes.error} />;
  }

  return <AssetsView assets={assetsRes.data} />;
}
