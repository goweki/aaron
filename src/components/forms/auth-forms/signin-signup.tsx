"use client";

import { useEffect, useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { House, Loader2, Lock } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { emailValidator, passwordValidator } from "@/lib/utils";
import { qParamsErrors } from "./auth-error-listener";

export function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [activeTab, setActiveTab] = useState<string>("sign-in");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Sign In Handler using NextAuth / Server Action transition
  const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { email, password } = formData;

    // Client-side validations
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError || passwordError) {
      toast.error(emailError || passwordError);
      return;
    }

    startTransition(async () => {
      try {
        // const res = await signIn("credentials", {
        //   email,
        //   password,
        //   redirect: false,
        //   callbackUrl,
        // });

        // if (res?.ok && !res?.error) {
        //   toast.success("Signed in successfully!");
        //   router.push(callbackUrl);
        //   router.refresh();
        // } else {
        //   const errKey = res?.error || "CredentialsSignin";
        //   toast.error(qParamsErrors[errKey] || "Invalid credentials");
        // }
        const username = email;

        const result = await signIn("credentials", {
          username,
          password,
          redirect: false,
          callbackUrl,
        });

        if (result?.error) {
          const message =
            qParamsErrors[result.error as keyof typeof qParamsErrors] ??
            "Failed to sign in";
          toast.error(message);
          return;
        }

        router.push(callbackUrl);
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again.");
      }
    });
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={(val) => {
        // Prevent navigating to disabled tabs
        if (val !== "sign-up") {
          setActiveTab(val);
        }
      }}
      className="w-full max-w-md m-auto p-4"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-in">Sign In</TabsTrigger>
        <TabsTrigger value="sign-up" disabled className="relative">
          Sign Up
        </TabsTrigger>
      </TabsList>

      {/* SIGN IN TAB */}
      <TabsContent value="sign-in">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials below to access your account.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSignIn}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                  disabled={isPending}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">
                    Password <span className="text-destructive">*</span>
                  </Label>
                  <Link
                    href="/reset-password"
                    className="text-xs text-muted-foreground underline hover:text-primary transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  disabled={isPending}
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-2">
              <Button
                type="submit"
                disabled={!formData.email || !formData.password || isPending}
              >
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isPending ? "Signing In..." : "Sign In"}
              </Button>

              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                title="Go Home"
              >
                <House size={20} />
              </Link>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      {/* SIGN UP TAB (DISABLED PLACEHOLDER) */}
      <TabsContent value="sign-up">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />
              Sign Up Disabled
            </CardTitle>
            <CardDescription>
              New account registration is currently restricted.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertDescription>
                Public registration is disabled at this time. If you require an
                account, please contact an administrator or request an invite.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("sign-in")}>
              Back to Sign In
            </Button>
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              title="Go Home"
            >
              <House size={20} />
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
