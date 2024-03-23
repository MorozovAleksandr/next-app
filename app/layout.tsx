import React from "react";
import { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["cyrillic"] });

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "async Meta",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(notoSans.className, "text-black")}>{children}</body>
    </html>
  );
}
