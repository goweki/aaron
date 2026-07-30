"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export const qParamsErrors: Record<string, string> = {
  OAuthSignin: "Error in constructing an authorization URL",
  OAuthCallback: "Error in handling the response from OAuth provider",
  OAuthCreateAccount: "Could not create user",
  EmailCreateAccount: "Could not create user",
  Callback: "Error in the OAuth callback handler route",
  OAuthAccountNotLinked:
    "Email is already linked, but not with this OAuth account",
  EmailSignin: "Sending the e-mail with verification token failed",
  CredentialsSignin: "Invalid credentials",
  SessionRequired: "The content of this page requires you to be signed in",
  Default: "An error occurred during authentication",
};

function AuthErrorListenerContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam) {
      const errorMessage = qParamsErrors[errorParam] || qParamsErrors.Default;
      toast.error(errorMessage);
    }
  }, [searchParams]);

  return null; // Pure side-effect component
}

export function AuthErrorListener() {
  return (
    <Suspense fallback={null}>
      <AuthErrorListenerContent />
    </Suspense>
  );
}
