"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import "./nav.css";
import MobNav from "./MobNav";

// https://alvarotrigo.com/blog/hamburger-menu-css/
// 10. Full Screen Morphing Hamburger Menu

const menuLinks = ["menu", "about-us", "hours+location"];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkEl = menuLinks.map((menuLink, index) => (
    <NavLink key={index} menuLink={menuLink} setIsOpen={setIsOpen} />
  ));

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="hidden md:block">
        <div
          onClick={handleClick}
          className="hamburger-container h-7 w-8 fixed top-6 right-6 z-[300] opacity-40 cursor-pointer  "
        ></div>
        <span
          className={`hamburger ${isOpen ? "hamburger-toggle" : ""}  `}
        ></span>

        <div className={`menu ${isOpen ? "menu-toggle " : " "}  `}></div>

        <div
          className={`flex flex-col gap-8 links ${
            isOpen ? "md:opacity-100" : "opacity-0 pointer-events-none"
          } `}
        >
          {navLinkEl}
        </div>
      </div>
      <div className="md:hidden">
        <MobNav />
      </div>
    </>
  );
}
