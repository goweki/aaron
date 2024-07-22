import { Input } from "@/components/ui/input";
import Sidebar, { Hamburger, UserDropDown } from "@/components/menubars";
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
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:pl-14">
        {/* <div className="flex flex-row justify-end"> */}
        {/* <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-lg px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"> */}
        <header className="sticky rounded-lg p-2 top-0 z-30 flex md:w-fit md:self-end mr-4 items-center gap-4 bg-background/80 backdrop-blur-lg px-4 sm:bg-transparent sm:px-6 shadow-md">
          {/* <Breadcrumb className="hidden md:flex ">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {legislationType ? (
                    <BreadcrumbLink href={`/${link.toLowerCase()}`}>
                      {link}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{link}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {legislationType ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        {titleCase(legislationType)}s
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : null}
              </BreadcrumbList>
            </Breadcrumb> */}
          <Hamburger />
          <div className="relative ml-auto flex-1 md:grow-0">
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              /> */}
          </div>
          <UserDropDown />
        </header>
        {/* </div> */}
        {children}
      </div>
    </div>
  );
}
