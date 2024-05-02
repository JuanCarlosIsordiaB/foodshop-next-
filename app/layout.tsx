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
      
      <body className={`${inter.className} bg-gray-200  p-4 sm:ml-64 md:flex md:flex-col md:items-center md:min-h-screen `}> 
        <div className="">
          <SideBar />
          <main>{children}</main>
        </div>
      </body>
    </html> // flex flex-col items-center w-full max-w-screen-lg mx-auto
    // flex justify-center items-center min-h-screen
  );
}
