"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster"; // Standardized on shadcn

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
