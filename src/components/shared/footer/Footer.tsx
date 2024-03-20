import React from "react";
import { links, address, hours } from "@/data/footerData";
import FooterLink from "./FooterLink";
import Socials from "./Socials";
import Newsletter from "./Newsletter";
import Logo from "../Logo";

export default function Footer() {
  const linkEl = links.map((link: string, index: number) => (
    <FooterLink key={index} link={link} />
  ));

  const today = new Date().getDay();

  return (
    <div className="bg-violet-300 w-full flex flex-col gap-10 items-center py-10 text-center">
      {/* links */}
      {/* <div className="flex flex-col items-center border-solid border-t-2 border-b-2 w-full border-violet-900 md:flex-row gap-3 py-3 md:w-[calc(100%-5rem)] md:gap-5">
        {linkEl}
      </div> */}

      <div className="flex flex-col gap-10 items-center md:grid md:grid-cols-3 md:items-start">
        {/* logo */}
        <div className="">
          <Logo />
        </div>

        {/* address */}
        <div className="flex flex-col">
          <p className="font-semibold">{address.title}</p>
          <p>{address.street}</p>
          <p>{address.city}</p>
          <p>{address.phone}</p>
        </div>

        {/* hours */}
        <div>
          <p className="font-semibold">Today's hours</p>
          <p>
            {hours[today].open} PM - {hours[today].close} PM
          </p>
        </div>
      </div>

      {/* newsletter */}
      <Newsletter />

      {/* socials */}
      <div>
        <Socials />
      </div>

      <span className="text-xs">POWERED BY SUGAR&LOVE</span>
    </div>
  );
}
