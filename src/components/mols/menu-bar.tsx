"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Menu,
  Music2,
  Radio,
  RadioIcon,
  SignalHigh,
  Activity,
  Droplet,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/mols/themeToggle";
import { UserNav } from "@/components/mols/user-nav";
import { cn, titleCase } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export type RouteItem = {
  label: string;
  href?: string;
  icon: LucideIcon;
  description?: string;
  children?: {
    label: string;
    href: string;
    icon?: LucideIcon;
    description?: string;
  }[];
};

export const routes: RouteItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Audio Assets",
    icon: Music2,
    children: [
      {
        label: "Assets",
        href: "/dashboard/assets",
        icon: Music2,
        description: "Manage indexed audio files, tracks, and signatures.",
      },
      {
        label: "Watermarks",
        href: "/dashboard/watermarks",
        icon: Droplet,
        description: "Configure spatial payloads and metadata watermarks.",
      },
    ],
  },
  {
    label: "Monitoring",
    icon: Activity,
    children: [
      {
        label: "Live Monitor",
        href: "/dashboard/monitor",
        icon: Activity,
        description: "Real-time spectrum monitoring and analysis.",
      },
      {
        label: "Detections",
        href: "/dashboard/detections",
        icon: RadioIcon,
        description: "Review automated acoustic recognition matches.",
      },
      {
        label: "Broadcasters",
        href: "/dashboard/broadcasters",
        icon: SignalHigh,
        description: "Manage radio streams and broadcast sources.",
      },
    ],
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Radio className="size-5" />
          </div>

          <div className="hidden lg:block">
            <p className="font-semibold tracking-tight">AARON</p>
            <p className="text-xs text-muted-foreground">
              Autonomous Audio Recognition
            </p>
          </div>
        </Link>

        {/* Mobile Navigation */}
        <MobileNav />

        {/* Desktop Navigation */}
        <DesktopNav className="hidden md:flex" />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}

function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {routes.map((route) => {
          if (route.children) {
            const isParentActive = route.children.some(
              (child) =>
                pathname === child.href || pathname.startsWith(child.href),
            );

            return (
              <NavigationMenuItem key={route.label}>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-accent text-muted-foreground hover:text-foreground",
                    isParentActive &&
                      "text-foreground font-semibold bg-accent/50",
                  )}
                >
                  {titleCase(route.label)}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {route.children.map((child) => {
                      const ChildIcon = child.icon;
                      const isActive =
                        pathname === child.href ||
                        pathname.startsWith(child.href);

                      return (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                isActive && "bg-accent/80 font-medium",
                              )}
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                {ChildIcon && (
                                  <ChildIcon className="size-4 text-primary" />
                                )}
                                {child.label}
                              </div>
                              {child.description && (
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (!route.href) return null;
          const active =
            pathname === route.href ||
            (route.href !== "/dashboard" && pathname.startsWith(route.href));

          return (
            <NavigationMenuItem key={route.href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href={route.href}
                  className={cn(
                    "bg-transparent hover:bg-accent text-muted-foreground hover:text-foreground",
                    active && "text-foreground font-semibold bg-accent/50",
                  )}
                >
                  {titleCase(route.label)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="size-5" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72">
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center gap-2">
              <Radio className="size-5 text-primary" />
              AARON
            </SheetTitle>
            <SheetDescription>Autonomous Audio Recognition</SheetDescription>
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-1">
            {routes.map((route) => {
              const Icon = route.icon;

              if (route.children) {
                const isParentActive = route.children.some(
                  (child) =>
                    pathname === child.href || pathname.startsWith(child.href),
                );

                return (
                  <Collapsible key={route.label} defaultOpen={isParentActive}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
                      <div className="flex items-center gap-3">
                        <Icon className="size-5" />
                        <span>{titleCase(route.label)}</span>
                      </div>
                      <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 border-l pl-2 pt-1">
                      {route.children.map((child) => {
                        const ChildIcon = child.icon;
                        const isActive =
                          pathname === child.href ||
                          pathname.startsWith(child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                              isActive
                                ? "bg-accent text-foreground"
                                : "text-muted-foreground",
                            )}
                          >
                            {ChildIcon && <ChildIcon className="size-4" />}
                            {titleCase(child.label)}
                          </Link>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                );
              }

              if (!route.href) return null;
              const active =
                pathname === route.href ||
                (route.href !== "/dashboard" &&
                  pathname.startsWith(route.href));

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                    active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <Icon className="size-5" />
                  {titleCase(route.label)}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
