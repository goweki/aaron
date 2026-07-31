"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { House, Loader2, Lock } from "lucide-react";

import {
  verifyResetTokenAction,
  updatePasswordWithTokenAction,
} from "@/actions/auth-actions";
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
import { nameValidator, passwordValidator } from "@/lib/utils";

interface SetPasswordFormProps {
  token: string;
  username: string;
}

export default function SetPasswordPage(props: SetPasswordFormProps) {
  const router = useRouter();
  const { token, username } = props;

  const [isVerifying, setIsVerifying] = useState(true);
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    name: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Verify Token on Mount
  useEffect(() => {
    let isMounted = true;

    async function verifyToken() {
      if (!username || !token) {
        toast.error("Invalid reset link");
        router.push("/reset-password");
        return;
      }

      const res = await verifyResetTokenAction(username, token);

      if (!isMounted) return;

      if (res.ok) {
        setFormData((prev) => ({ ...prev, name: res.data.name || "" }));
        setIsVerifying(false);
      } else {
        toast.error(res.error || "Reset link is invalid or expired");
        router.push("/reset-password");
      }
    }

    verifyToken();

    return () => {
      isMounted = false;
    };
  }, [username, token, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const nameError = nameValidator(formData.name);
    if (nameError) {
      toast.error(nameError);
      return;
    }

    const passwordError = passwordValidator(
      formData.newPassword,
      formData.confirmPassword,
    );
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    startTransition(async () => {
      const res = await updatePasswordWithTokenAction({
        username,
        token,
        name: formData.name,
        password: formData.newPassword,
      });

      if (res.ok) {
        toast.success("Password updated successfully! Please sign in.");
        router.push("/sign-in");
      } else {
        toast.error(res.error || "Failed to reset password. Try again.");
      }
    });
  };

  // Render Verifying Loading Card
  if (isVerifying) {
    return (
      <Card className="mx-auto w-full max-w-sm">
        <CardContent className="flex flex-col items-center justify-center space-y-3 p-8">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Verifying security token...
          </p>
        </CardContent>
      </Card>
    );
  }

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.newPassword !== "" &&
    formData.confirmPassword !== "";

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Lock className="h-5 w-5 text-indigo-600" /> Update Password
        </CardTitle>
        <CardDescription>
          Set your name and a new secure password for your account.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {/* Readonly Email Display */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={username}
              disabled
              autoComplete="username"
              className="bg-slate-50 dark:bg-slate-900"
            />
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              disabled={isPending}
              autoComplete="name"
              required
            />
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="newPassword">
              New Password <span className="text-destructive">*</span>
            </Label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="••••••••"
              value={formData.newPassword}
              onChange={handleChange}
              disabled={isPending}
              autoComplete="new-password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password <span className="text-destructive">*</span>
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isPending}
              autoComplete="new-password"
              required
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-2">
          <Button
            type="submit"
            className="w-full"
            disabled={!isFormValid || isPending}
          >
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isPending ? "Updating..." : "Update Password"}
          </Button>
        </CardFooter>
      </form>

      <CardFooter className="flex items-center justify-between border-t pt-4">
        <Link
          href="/sign-in"
          className="text-xs text-slate-500 transition-colors hover:text-indigo-600"
        >
          Remember your password? Sign in
        </Link>
        <Link
          href="/"
          className="p-1 text-slate-400 transition-colors hover:text-indigo-600"
          title="Go Home"
        >
          <House size={18} />
        </Link>
      </CardFooter>
    </Card>
  );
}
