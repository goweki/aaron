"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  FileInput,
  Home,
  Menu,
  Users,
  Settings,
  File,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./mols/themeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useSession } from "next-auth/react";
import { cn, titleCase } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { UserNav } from "./mols/user-nav";

export const routes = {
  unauth: [
    { label: "home", link: "/", icon: Home },
    { label: "blog", link: "/blog", icon: Users },
    { label: "contacts", link: "/contacts", icon: BookOpen },
  ],
  auth: [
    { label: "dashboard", link: "/dashboard", icon: Users },
    // { label: "assets", link: "/dashboard/assets", icon: BookOpen },
  ],
};

export default function Navbar() {
  // const pathname = usePathname();
  return (
    <header className="sticky border-b border-border/50 p-4 top-0 z-30 flex items-center gap-4 bg-background/80 backdrop-blur px-4 sm:px-6 shadow-md">
      <div className="flex flex-row flex-1">
        <HamburgerMenu />
        <MainNav className="hidden md:flex" />
      </div>

      {/* <Search /> */}
      <ThemeToggle />
      <UserNav />
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
            <SheetTitle className="uppercase">AARON</SheetTitle>
            <SheetDescription className="sr-only">Main Menu</SheetDescription>
          </SheetHeader>
          <nav className="grid gap-2 mt-4 text-lg font-medium">
            {(authStatus === "authenticated" ? routes.auth : routes.unauth).map(
              ({ label, link, icon: Icon }) => (
                <Link
                  key={label}
                  href={link}
                  className={`${
                    pathname === link ? "bg-accent !text-foreground" : ""
                  } p-2 rounded-lg mr-4 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              )
            )}
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
      {(authStatus === "authenticated" ? routes.auth : routes.unauth).map(
        ({ label, link }) => (
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
        )
      )}
    </nav>
  );
}
