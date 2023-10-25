"use client";


import Header from "@/common/components/header/header.component";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}</body>
    </html>
  );
}
