import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Accordian from "./accordian/Accordian";
import { menuCategories, aboutCategories } from "@/data/navDrawerData";

export default function NavDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </SheetTrigger>
      {/* @ts-ignore */}
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-left">
            <Link href={"/"}>HOME</Link>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col">
              {/* menu dropdown*/}
              <Accordian categories={menuCategories} triggerText="MENU" />

              {/* about dropdown*/}
              <Accordian categories={aboutCategories} triggerText="ABOUT" />

              {/* hours and location */}
              <Link
                href={"/hours-location"}
                className="text-left font-semibold mt-4"
              >
                HOURS + LOCATION
              </Link>

              {/* buttons */}
              <div className="flex flex-col gap-3 mt-8">
                {/* <Button>TAKEOUT</Button>
                <Button>RESERVE</Button> */}
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
