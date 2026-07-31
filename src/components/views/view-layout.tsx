import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}

export interface HeaderAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  variant?:
    "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export interface ViewLayoutProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItemType[];
  actions?: HeaderAction[];
  children: React.ReactNode;
  className?: string;
}

export default function ViewLayout({
  title,
  description,
  breadcrumbs,
  actions,
  children,
  className = "",
}: ViewLayoutProps) {
  return (
    <div className={`max-w-7xl mx-auto p-6 space-y-6 ${className}`}>
      {/* Header Section */}
      <div className="space-y-3">
        {/* Optional Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {isLast || !item.href ? (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        )}

        {/* Title, Description & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {title}
            </h1>
            {description && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {description}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          {actions && actions.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {actions.map((action, idx) => {
                const Icon = action.icon;
                const buttonContent = (
                  <>
                    {Icon && <Icon className="w-4 h-4 mr-1.5" />}
                    {action.label}
                  </>
                );

                if (action.href) {
                  return (
                    <Button
                      key={idx}
                      variant={action.variant || "default"}
                      asChild
                    >
                      <Link href={action.href}>{buttonContent}</Link>
                    </Button>
                  );
                }

                return (
                  <Button
                    key={idx}
                    variant={action.variant || "default"}
                    onClick={action.onClick}
                  >
                    {buttonContent}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
