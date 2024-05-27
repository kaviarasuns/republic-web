"use client";

import Script from "next/script";

type AdsenseTypes = {
  pId: string;
};
export default function AdSense() {
  const pId = process.env.NEXT_PUBLIC_ADSENSE_PID;
  console.log("This is pId", pId);
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
