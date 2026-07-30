import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PublicProvider, RootProvider } from "@/components/providers";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fetchOpenStatistics } from "@/actions/landing-page-actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aaron",
  description: "Automatic Audio Recognition",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch statistics server-side (HTML arrives with data pre-populated)
  const openStatRes = await fetchOpenStatistics();
  const openData = openStatRes.ok
    ? openStatRes.data
    : { assets: 0, detections: 0 };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <RootProvider>
          <PublicProvider initialData={openData}>{children}</PublicProvider>
        </RootProvider>
      </body>
    </html>
  );
}
