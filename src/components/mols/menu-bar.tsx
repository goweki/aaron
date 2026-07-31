"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Radio,
  LayoutDashboardIcon,
  Music2Icon,
  RadioIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/mols/themeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import { cn, titleCase } from "@/lib/utils";
import { UserNav } from "@/components/mols/user-nav";

export const routes = [
  { label: "Dashboard", link: "/dashboard", icon: LayoutDashboardIcon },
  { label: "Assets", link: "/dashboard/assets", icon: Music2Icon },
  { label: "Detections", link: "/dashboard/detections", icon: RadioIcon },
];

export default function Navbar() {
  return (
    <header className="sticky border-b border-border/50 p-4 top-0 z-30 flex items-center justify-between gap-4 bg-background/80 backdrop-blur px-4 sm:px-6 shadow-md">
      <div className="flex items-center gap-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Radio className="h-5 w-5 shrink-0" />
          </div>
          {/* <div className="flex flex-col">
            <span className="font-bold text-base leading-none tracking-tight">
              AARON
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight hidden lg:inline-block">
              Autonomous Audio Recognition
            </span>
          </div> */}
        </Link>

        {/* Mobile Hamburger & Desktop Navigation */}
        <HamburgerMenu />
        <MainNav className="hidden md:flex" />
      </div>

      {/* Right Action Items */}
      <div className="flex items-center gap-4">
        {/* <Search /> */}
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}

function HamburgerMenu() {
  const { data: session, status: authStatus } = useSession();
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Hamburger Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <SheetHeader className="text-start">
            <SheetTitle className="flex items-center gap-2 uppercase">
              <Radio className="h-5 w-5 text-primary" />
              AARON
            </SheetTitle>
            <SheetDescription className="text-xs text-muted-foreground">
              Autonomous Audio Recognition
            </SheetDescription>
          </SheetHeader>
          <nav className="grid gap-2 mt-4 text-lg font-medium">
            {routes.map(({ label, link, icon: Icon }) => (
              <Link
                key={label}
                href={link}
                className={`${
                  pathname === link ? "bg-accent text-foreground" : ""
                } p-2 rounded-lg mr-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const { data: session, status: authStatus } = useSession();
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map(({ label, link }) => (
        <Link
          href={link}
          key={label}
          className={
            link === pathname
              ? `text-sm font-medium transition-colors hover:text-primary`
              : `text-sm font-medium text-muted-foreground transition-colors hover:text-primary`
          }
        >
          {titleCase(label)}
        </Link>
      ))}
    </nav>
  );
}
