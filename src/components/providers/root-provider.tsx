"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>
        <TooltipProvider>
          {children}
          <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        </TooltipProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
