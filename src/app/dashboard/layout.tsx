import Navbar from "@/components/mols/menu-bar";
import DashboardProviders, { DashboardContext } from "@/components/providers";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // await requireUser();

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 bg-green-600">
        <div className="sm:hidden w-full h-full flex">
          <div className="flex flex-col flex-1 my-8">
            <span className="inline-block m-auto italic text-sm text-center">
              Please use a wider screen for better viewing
            </span>
          </div>
        </div>
        content here
      </main>
    </>
  );
}
