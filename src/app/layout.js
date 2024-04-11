import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./layoutProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A.A.R.O.N.",
  description: "Automatic Audio Recognition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
