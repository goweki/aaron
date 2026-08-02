import { Suspense } from "react";
import { SignInForm } from "@/components/forms/auth-forms/signin-signup";
import { AuthErrorListener } from "@/components/forms/auth-forms/auth-error-listener";

export default async function SignInPage() {
  return (
    <Suspense fallback={<SignInFormSkeleton />}>
      <AuthErrorListener />
      <SignInForm />
    </Suspense>
  );
}

// Simple fallback skeleton to prevent UI flicker
function SignInFormSkeleton() {
  return (
    <div className="w-full max-w-md h-100 animate-pulse rounded-xl bg-muted m-auto" />
  );
}
