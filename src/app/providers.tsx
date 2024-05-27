// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ReactNode } from "react";

interface CSPostHogProviderProps {
  children: ReactNode;
}

if (typeof window !== "undefined") {
  posthog.init("phc_e3P5QcahUB5umX5wH0eDiyNNk2FB9PNBsuhftVhHhUr", {
    api_host: "https://us.i.posthog.com",
  });
}
export function CSPostHogProvider({ children }: CSPostHogProviderProps) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
