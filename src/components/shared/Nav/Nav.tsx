"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import "./nav.css";

// https://alvarotrigo.com/blog/hamburger-menu-css/
// 10. Full Screen Morphing Hamburger Menu

const menuLinks = ["menu", "about-us", "hours+location"];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkEl = menuLinks.map((menuLink) => (
    <NavLink menuLink={menuLink} setIsOpen={setIsOpen} />
  ));
  console.log(isOpen);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <div className="">
      {/* <input type="checkbox" onClick={handleClick} className="cursor-pointer" /> */}

      <div
        onClick={handleClick}
        className="hamburger-container h-7 w-8 fixed top-6 right-6 z-[300] opacity-40 cursor-pointer"
      ></div>
      <span className={`hamburger ${isOpen ? "hamburger-toggle" : ""} `}></span>

      <div className={`menu ${isOpen ? "menu-toggle " : " "}`}></div>

      {/* add aos to make it appear and disapear slower */}
      {isOpen && (
        <div className={`flex flex-col gap-5 links `}>{navLinkEl}</div>
      )}
    </div>
  );
}

{
  /* <div>{navLinkEl}</div>  */
}

{
  /* <div className="flex flex-col gap-3 mt-8">
      <Button>TAKEOUT</Button>
                 <Button>RESERVE</Button> 
      </div> */
}
