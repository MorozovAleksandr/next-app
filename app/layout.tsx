import React from "react";
import { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import cn from "classnames";
import { Footer, Header, Sidebar } from "./components";

import "./globals.css";
import style from "./layout.module.css";

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
      <body className={cn(notoSans.className, "text-black")}>
        <div className={style.wrapper}>
          <Header className={style.header} />
          <Sidebar className={style.sidebar} />
          <div className={style.body}>{children}</div>
          <Footer className={style.footer} />
        </div>
      </body>
    </html>
  );
}
