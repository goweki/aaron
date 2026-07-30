import { AlertCircleIcon, RotateCcwIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ErrorView({ error }: { error: string }) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 py-20 text-center">
      <div className="rounded-full bg-destructive/10 p-3 text-destructive animate-in fade-in zoom-in-95 duration-300">
        <AlertCircleIcon className="h-6 w-6" />
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">Failed</h2>
        <p className="text-sm text-muted-foreground max-w-md">
          {error || "An unexpected error occurred. Please try again."}
        </p>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>

        <Button asChild size="sm">
          <Link href="/dashboard/assets">
            <RotateCcwIcon className="mr-2 h-4 w-4" />
            Try Again
          </Link>
        </Button>
      </div>
    </div>
  );
}
