import "server-only";

import { Prisma } from "@/lib/prisma/generated";

function prettifyConstraintName(name: string) {
  return name
    .replace(/_fkey$/i, "")
    .replace(/_/g, " ")
    .trim();
}

function getForeignKeyMessage(constraint?: string) {
  if (!constraint) {
    return "This record cannot be deleted because other records depend on it.";
  }

  const match = constraint.match(/^([a-z_]+)_/i);

  if (match?.[1]) {
    return `This record cannot be deleted because related ${match[1].replaceAll(
      "_",
      " ",
    )} records exist.`;
  }

  return `This record cannot be deleted because related records exist (${prettifyConstraintName(
    constraint,
  )}).`;
}

export function handlePrismaError(error: unknown): string | null {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return "A record with the same information already exists.";

      case "P2003":
        return getForeignKeyMessage(String(error.meta?.field_name ?? ""));

      case "P2025":
        return "The requested record could not be found.";

      default:
        return `${error.code}: ${error.message}`;
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return error.message;
  }

  return null;
}

export function handleGenericError(error: unknown): string {
  if (error instanceof Error) {
    return error.message || "An unexpected error occurred.";
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again later.";
}

export function getFriendlyErrorMessage(error: unknown): string {
  console.error(error);

  return handlePrismaError(error) ?? handleGenericError(error);
}
