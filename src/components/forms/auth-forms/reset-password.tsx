"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { ArrowLeft, House, Loader2, MailCheck } from "lucide-react";

import { resetPasswordAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emailValidator } from "@/lib/utils";

export function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = emailValidator(email);
    if (emailError) {
      toast.error(emailError);
      return;
    }

    startTransition(async () => {
      const res = await resetPasswordAction(email);

      if (res.ok) {
        setIsSubmitted(true);
        toast.success("Reset link sent! Check your email inbox.");
      } else {
        toast.error(res.error || "Failed to send reset link. Try again later.");
      }
    });
  };

  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
          {isSubmitted
            ? "Check your inbox for further instructions."
            : "Enter your email address and we'll send you a link to reset your password."}
        </CardDescription>
      </CardHeader>

      {isSubmitted ? (
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-center p-6 bg-muted/40 rounded-lg text-center space-y-2">
            <MailCheck className="h-10 w-10 text-primary" />
            <p className="text-sm font-medium">Reset Link Sent</p>
            <p className="text-xs text-muted-foreground">
              If an account exists for{" "}
              <span className="font-semibold">{email}</span>, you will receive
              an email shortly.
            </p>
          </div>
        </CardContent>
      ) : (
        <form onSubmit={handleResetPassword}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
                placeholder="name@example.com"
                autoComplete="email"
                className="placeholder:italic"
                disabled={isPending}
                required
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-2">
            <Button
              type="submit"
              className="w-full"
              disabled={!email || isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? "Sending..." : "Send Reset Link"}
            </Button>
          </CardFooter>
        </form>
      )}

      <CardFooter className="flex items-center justify-between border-t pt-4">
        <Link
          href="/sign-in"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Back to Sign In
        </Link>
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary transition-colors p-1"
          title="Go Home"
        >
          <House size={18} />
        </Link>
      </CardFooter>
    </Card>
  );
}
