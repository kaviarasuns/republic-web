// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ReactNode } from "react";

interface CSPostHogProviderProps {
  children: ReactNode;
}

if (typeof window !== "undefined") {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  console.log("Key & Host", posthogKey, posthogHost);
  posthog.init(posthogKey, {
    api_host: posthogHost,
  });
}
export function CSPostHogProvider({ children }: CSPostHogProviderProps) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
