import { fetchDashboardData } from "@/actions/dashboard-actions";
import Navbar from "@/components/mols/menu-bar";
import { DashboardProvider } from "@/components/providers";
import ErrorView from "@/components/views/error-view";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dashboardRes = await fetchDashboardData();

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <div className="sm:hidden w-full h-full flex">
          <div className="flex flex-col flex-1 my-8">
            <span className="inline-block m-auto italic text-sm text-center">
              Please use a wider screen for better viewing
            </span>
          </div>
        </div>
        {dashboardRes.ok ? (
          <DashboardProvider initialData={dashboardRes.data}>
            {children}
          </DashboardProvider>
        ) : (
          <ErrorView error={dashboardRes.error} />
        )}
      </main>
    </>
  );
}
