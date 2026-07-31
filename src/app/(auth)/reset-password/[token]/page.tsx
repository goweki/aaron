import SetPasswordForm from "@/components/forms/auth-forms/set-password";

interface PageProps {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { token } = await params;
  const { username } = await searchParams;

  return (
    <div className="container mx-auto py-12">
      <SetPasswordForm token={token ?? ""} username={username ?? ""} />
    </div>
  );
}
