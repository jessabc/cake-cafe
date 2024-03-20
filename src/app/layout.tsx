import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// preline
import PrelineScript from "./components/PrelineScript";
import Footer from "@/components/shared/footer/Footer";
import StickyFooter from "@/components/shared/stickyFooter/StickyFooter";

import Hamburger from "@/components/shared/hamburger/Hamburger";
import Link from "next/link";
import Logo from "@/components/shared/Logo";

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
      <body className={` ${inter.className}`}>
        {/* <StickyHeader /> */}
        <div className="flex justify-between ">
          <div className=" fixed z-50 pt-2 pl-4 text-violet-600 ">
            <Logo />
          </div>
          <Hamburger />
        </div>
        {/* mt-20  mx-5 md:mx-10 */}
        <div className="">{children}</div>

        <Footer />
        {/* <StickyFooter /> */}
      </body>
      <PrelineScript />
    </html>
  );
}
