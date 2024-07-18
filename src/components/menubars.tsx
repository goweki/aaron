"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { BookOpen, FileInput, Home, Menu, Users } from "lucide-react";
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

export const routes = {
  unauth: [
    { label: "home", link: "/", icon: Home },
    { label: "mps", link: "/mps", icon: Users },
    { label: "legislations", link: "/legislations", icon: BookOpen },
  ],
  auth: [
    { label: "home", link: "/user", icon: Home },
    { label: "mps", link: "/user/mps", icon: Users },
    { label: "legislations", link: "/user/legislations", icon: BookOpen },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="absolute inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {(pathname.includes("/user") ? routes.auth : routes.unauth).map(
          ({ label, link, icon: Icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Link
                  href={link}
                  className={`${
                    pathname === link ? " bg-accent !text-foreground" : ""
                  } flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                  // text-accent-foreground
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{label}</TooltipContent>
            </Tooltip>
          )
        )}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <ThemeToggle />
      </nav>
    </aside>
  );
}

export function Hamburger() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Hamburger Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <SheetHeader className="text-start">
          <SheetTitle className="uppercase">Bunge-scope</SheetTitle>
          <SheetDescription className="sr-only">Main Menu</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-2 mt-4 text-lg font-medium">
          {(pathname.includes("/user") ? routes.auth : routes.unauth).map(
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
  );
}
