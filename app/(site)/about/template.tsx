import React from "react";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "async Meta",
});

export default function AboutTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      ABOUT template
      {children}
    </div>
  );
}
