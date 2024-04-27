import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoodApp",
  description: "Food Shop with Next.js and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} bg-gray-100 p-4 sm:ml-64`}>
        <div>
          <SideBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
