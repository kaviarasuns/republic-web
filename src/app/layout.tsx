import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nabar";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";
import AdSense from "@/components/AdSense";
import { CSPostHogProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "teamRepublic.in",
  description: "Day One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <AdSense />
        </head>
        <CSPostHogProvider>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </CSPostHogProvider>
      </html>
    </ReactQueryProvider>
  );
}
