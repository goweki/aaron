import ViewLayout from "@/components/views/view-layout";
import UploadAssetForm from "@/components/forms/assets/upload-asset-form";

export default async function UploadAssetPage() {
  return (
    <ViewLayout
      title="Upload & Index Audio Asset"
      description="Generate landmark hashes and optionally register an inaudible watermark payload for a catalog track."
    >
      <UploadAssetForm />
    </ViewLayout>
  );
}
