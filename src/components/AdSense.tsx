import Script from "next/script";

type AdsenseTypes = {
  pId: string;
};
export default function AdSense({ pId }: AdsenseTypes) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
