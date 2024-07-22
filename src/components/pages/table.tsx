"use client";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { isLegislation, isMp, Legislation, Mp } from "@/lib/prisma/types";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { DataContext } from "@/components/providers";
import Sidebar, { Hamburger } from "@/components/menubars";
import toast from "react-hot-toast";
import { camelCase, titleCase, truncateStr } from "@/lib/utils";

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

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const default_filters = {
  search: "",
};

export function TableViewLayout({
  title,
  desc,
  items: _items,
  headers,
  link,
}: {
  title: string;
  desc: string;
  items: { [key: string]: any }[];
  headers: string[];
  link: string;
}) {
  //   const { mps: items, legislations } = useContext<{
  //     mps: Mp[];
  //     legislations: Legislation[];
  //   }>(DataContext);

  const [items, setItems] = useState<{ [key: string]: any[] }>({ mps: [] });
  const [filters, setFilters] = useState(default_filters);
  const searchParams = useSearchParams();
  const legislationType = searchParams.get("legType");

  const [pagination, setPagination] = useState<{
    rowsPerPage: number;
    pages: number;
    currentPage: number;
  }>({
    rowsPerPage: 25,
    pages: 1,
    currentPage: 1,
  });

  //handle number of pages
  useEffect(() => {
    if (Object.values(items).flat().length > 0) {
      setPagination((prev) => ({
        ...prev,
        pages: Math.ceil(
          Object.values(items).flat().length / pagination.rowsPerPage
        ),
        currentPage: 1,
      }));
    }
  }, [items, pagination.rowsPerPage]);

  // data: context to state
  useEffect(() => {
    const { search: searchPhrase } = filters;
    let stringedObj = "";
    //if items are Mps
    if (isMp(_items[0])) {
      // console.log("Mps data");
      const mps_ = _items.filter(
        ({ firstName, lastName, otherName, party, constituency }) => {
          let constituencyName = "";
          let countyName = "";
          if (constituency) {
            constituencyName = constituency.name;
            countyName = constituency.county;
            // Rest of your code
          }
          stringedObj = [
            firstName,
            lastName,
            otherName,
            party,
            constituencyName,
            countyName,
          ].join(" ");
          return stringedObj.toLowerCase().includes(searchPhrase.toLowerCase());
        }
      );
      setItems({ mps: mps_ });
    } else if (isLegislation(_items[0])) {
      // console.log("Legislation data");
      const legislations_ = _items.filter(({ title }) => {
        stringedObj = [title].join(" ");
        return stringedObj.toLowerCase().includes(searchPhrase.toLowerCase());
      });
      // console.log("legType - ", legislationType);

      const typeFilteredLegislations = legislations_.filter(
        ({ type }) => type === (legislationType ? legislationType : type)
      );
      setItems({ legislations: typeFilteredLegislations });
    }
  }, [_items, filters, legislationType]);

  //get currentPage rows
  function getPageRows(): any[] {
    const i = (pagination.currentPage - 1) * pagination.rowsPerPage;
    const j = pagination.currentPage * pagination.rowsPerPage;
    return Object.values(items).flat().slice(i, j);
  }
  // const pageData = mps.slice(i, j);
  // setPagination((prev) => ({ ...prev, data: pageData }));

  // Table headers and keys from the first object in the array

  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-[1400px] bg-muted/10">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid my-8 flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 overflow-x-auto">
          <Breadcrumb className="hidden md:flex ">
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
          </Breadcrumb>
          <Hamburger />

          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader className="flex flex-col md:flex-row md:space-x-8 md:justify-between">
              <div className="grid grid-cols-1 gap-2">
                <div className="space-y-2">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </div>
                <Pagination className="justify-right mx-0 w-fit">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        className={`${
                          pagination.currentPage === 1
                            ? "pointer-events-none opacity-25"
                            : "cursor-pointer"
                        }`}
                        onClick={() => {
                          setPagination((prev) => ({
                            ...prev,
                            currentPage: Math.max(prev.currentPage - 1, 1),
                          }));
                        }}
                      />
                    </PaginationItem>
                    {/* <div>
                      {[...Array(pagination.pages)].map((_, index) => (
                        <PaginationItem key={index + 1}>
                          <PaginationLink
                            isActive={pagination.currentPage === index + 1}
                            onClick={() => {
                              setPagination((prev) => ({
                                ...prev,
                                currentPage: index + 1,
                              }));
                            }}
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                    </div> */}
                    <PaginationItem>
                      <PaginationLink
                        isActive
                        className="w-fit p-2 cursor-default hover:bg-background"
                      >
                        {pagination.currentPage} of {pagination.pages}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => {
                          setPagination((prev) => ({
                            ...prev,
                            currentPage: Math.min(
                              prev.currentPage + 1,
                              prev.pages
                            ),
                          }));
                        }}
                        className={`${
                          pagination.currentPage === pagination.pages
                            ? "pointer-events-none opacity-25"
                            : "cursor-pointer"
                        }`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              <div className="flex flex-row items-end">
                <div className="relative md:min-w-56 max-w-96 flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 placeholder:italic border-border/50"
                    value={filters.search}
                    onChange={(e) => {
                      setFilters((prev) => ({
                        ...prev,
                        search: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {_items.length === 0 ? (
                <div className="text-foreground/25 italic">
                  No data on {title}. Try again later
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">{headers[0]}</span>
                      </TableHead>
                      <TableHead>{headers[1]}</TableHead>
                      <TableHead>{headers[2]}</TableHead>
                      <TableHead className="hidden md:table-cell">
                        {headers[3]}
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        {headers[4]}
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        {headers[5]}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {"mps" in items ? (
                      getPageRows().map((row: Mp) => (
                        <TableRow key={row.id}>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="photo"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={row.photoUrl || "./avatar-profile.svg"}
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {`${row.lastName} ${row.firstName} ${row.otherName}`}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{row.party}</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {titleCase(row.constituency?.name || "")}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {titleCase(row.constituency?.county || "")}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {/* {titleCase("debates")} */}-
                          </TableCell>
                        </TableRow>
                      ))
                    ) : "legislations" in items ? (
                      getPageRows().map((row: Legislation) => (
                        <TableRow key={row.id}>
                          <TableCell className="hidden sm:table-cell">
                            {/* <Image
                              alt="photo"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={row.photoUrl || "./avatar-profile.svg"}
                              width="64"
                            /> */}
                            {row.type === "ACT" ? (
                              <BookOpen size={64} className="opacity-25" />
                            ) : (
                              <FileInput size={64} className="opacity-25" />
                            )}
                          </TableCell>
                          <TableCell className="font-medium">
                            {row.title}
                          </TableCell>
                          <TableCell>
                            {truncateStr(row.description, 160)}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge variant="outline">{row.status}</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {titleCase(row.type)}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            -
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <></>
                    )}
                    {/* DEL */}
                  </TableBody>
                </Table>
              )}
            </CardContent>
            <CardFooter className="bg-muted/25 flex justify-between p-6">
              <p className="text-xs text-muted-foreground ">
                Showing{" "}
                <strong>
                  {(pagination.currentPage - 1) * pagination.rowsPerPage + 1}-
                  {(pagination.currentPage - 1) * pagination.rowsPerPage +
                    getPageRows().length}
                </strong>{" "}
                of <strong>{Object.values(items).flat().length}</strong> {link}
              </p>
              <Pagination className="justify-right mx-0 w-fit">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={`${
                        pagination.currentPage === 1
                          ? "pointer-events-none opacity-25"
                          : "cursor-pointer"
                      }`}
                      onClick={() => {
                        setPagination((prev) => ({
                          ...prev,
                          currentPage: Math.max(prev.currentPage - 1, 1),
                        }));
                      }}
                    />
                  </PaginationItem>
                  {/* <div>
                    {[...Array(pagination.pages)].map((_, index) => (
                      <PaginationItem key={index + 1}>
                        <PaginationLink
                          isActive={pagination.currentPage === index + 1}
                          onClick={() => {
                            setPagination((prev) => ({
                              ...prev,
                              currentPage: index + 1,
                            }));
                          }}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </div> */}
                  <PaginationItem>
                    <PaginationLink
                      isActive
                      className="w-fit p-2 cursor-default hover:bg-background"
                    >
                      {pagination.currentPage} of {pagination.pages}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => {
                        setPagination((prev) => ({
                          ...prev,
                          currentPage: Math.min(
                            prev.currentPage + 1,
                            prev.pages
                          ),
                        }));
                      }}
                      className={`${
                        pagination.currentPage === pagination.pages
                          ? "pointer-events-none opacity-25"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}

//
export function DashboardLayout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-muted/10">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-lg px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Hamburger />

          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 sm:p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle>Your Orders</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Create New Order</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>This Week</CardDescription>
                  <CardTitle className="text-4xl">$1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% from last week
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">$5,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="relative">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      Recent orders from your store.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Noah Williams</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              noah@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Subscription
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-25
                          </TableCell>
                          <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Order Oe31b70H
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: November 23, 2023</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Glimmer Lamps x <span>2</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Aqua Filters x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Customer Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Customer</dt>
                      <dd>Liam Johnson</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">liam@acme.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+1 234 567 890</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
