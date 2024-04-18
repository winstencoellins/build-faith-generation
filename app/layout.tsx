import type { Metadata } from "next";
import { Arya } from "next/font/google";
import "./globals.css";

const inter = Arya({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Build Faith Generation | Welcome",
  description: "Komunitas Rohani Kristen di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
