"use client";

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
  Settings,
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

export const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Assets",
    href: "/dashboard/assets",
    icon: Music2,
  },
  {
    label: "Detections",
    href: "/dashboard/detections",
    icon: RadioIcon,
  },
  {
    label: "Broadcasters",
    href: "/dashboard/broadcasters",
    icon: SignalHigh,
  },
  {
    label: "Monitor",
    href: "/dashboard/monitor",
    icon: Activity,
  },
  {
    label: "Watermarks",
    href: "/dashboard/watermarks",
    icon: Droplet,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
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

        <MobileNav />

        <DesktopNav className="hidden md:flex" />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}

function MobileNav() {
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

          <Navigation vertical className="mt-6" />
        </SheetContent>
      </Sheet>
    </div>
  );
}

function DesktopNav({ className }: { className?: string }) {
  return <Navigation className={className} />;
}

function Navigation({
  vertical = false,
  className,
}: {
  vertical?: boolean;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        vertical ? "flex flex-col gap-1" : "flex items-center gap-6",
        className,
      )}
    >
      {routes.map(({ label, href, icon: Icon }) => {
        const active =
          pathname === href ||
          (href !== "/dashboard" && pathname.startsWith(href));

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              vertical ? "hover:bg-accent" : "hover:text-primary",
              active ? "bg-accent text-foreground" : "text-muted-foreground",
            )}
          >
            {vertical && <Icon className="size-5" />}
            {titleCase(label)}
          </Link>
        );
      })}
    </nav>
  );
}
