"use client";

import WithTitleLayout from "@/components/layouts/withNavBar_title";
import DashboardProviders, { DashboardContext } from "@/components/providers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <WithTitleLayout title="Dashboard">
      <div className="space-y-4 flex flex-col">
        <div className="bg-muted py-4 px-2 mb-4 space-x-2 space-y-2 inline h-fit w-fit rounded-md overflow-hidden">
          {routes.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              className={`px-2 py-2 transition-colors border-2 border-transparent rounded-md ${
                pathname === link ||
                (pathname.startsWith(`${link}/`) && link !== "/dashboard")
                  ? "bg-background"
                  : "hover:bg-background"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <DashboardProviders>{children}</DashboardProviders>
      </div>
    </WithTitleLayout>
  );
}

const routes: { [key: string]: string }[] = [
  { label: "Overview", link: "/dashboard" },
  { label: "Assets", link: "/dashboard/assets" },
  { label: "Livestream", link: "/dashboard/livestream" },
  { label: "Reports", link: "/dashboard/reports" },
  { label: "Notifications", link: "/dashboard/notifications" },
];
