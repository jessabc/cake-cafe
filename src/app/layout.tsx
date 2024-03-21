import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Footer from "@/components/shared/footer/Footer";
import Logo from "@/components/shared/Logo";
import Nav from "@/components/shared/Nav/Nav";
import { AOSInit } from "../lib/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAKE&CO",
  description: "Cupcake ipsum dolor sit amet toffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={` ${inter.className} overflow-x-hidden overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track] :bg-slate-700
        dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`}
      >
        <div className="flex justify-between ">
          <div className=" fixed z-50 pt-2 pl-4 text-violet-600 ">
            <Logo />
          </div>
          <Nav />
        </div>

        <div className="">{children}</div>

        <Footer />
        {/* <StickyFooter /> */}
      </body>
      <PrelineScript />
    </html>
  );
}
