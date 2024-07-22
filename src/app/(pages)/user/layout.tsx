import { Input } from "@/components/ui/input";
import Sidebar, {
  HamburgerMenu,
  Navbar,
  UserDropDown,
} from "@/components/menubars";
import {
  BookOpen,
  FileInput,
  ScrollText,
  Search,
  User,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

//
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen w-full max-w-[1400px] flex-col bg-muted/10">
      {/* <Sidebar /> */}
      <div className="flex flex-col sm:gap-4">
        {/* <div className="flex flex-col sm:gap-4 sm:pl-14"> */}

        {/* <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-lg px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"> */}
        <Navbar />
        {children}
      </div>
    </div>
  );
}
