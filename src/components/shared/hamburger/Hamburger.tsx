"use client";
import React, { useState, useRef } from "react";
import "./hamburger.css";
import Accordian from "../navDrawer/accordian/Accordian";
import { aboutCategories, menuCategories } from "@/data/navDrawerData";
import Link from "next/link";
import MenuLink from "./MenuLink";

// https://alvarotrigo.com/blog/hamburger-menu-css/
// 10. Full Screen Morphing Hamburger Menu

const menuLinks = ["menu", "about-us", "hours+location"];

export default function Hamburger() {
  const [linkClicked, setLinkClicked] = useState(false);
  const inputElement = useRef(false);

  const handleClick = (event) => {
    console.log("clicked");
    event.stopPropagation();
    console.log(inputElement.current.checked);
    inputElement.current.checked = false;

    console.log(inputElement.current.checked);
  };

  const menuLinkEl = menuLinks.map((menuLink) => (
    <MenuLink
      menuLink={menuLink}
      handleClick={handleClick}
      inputElement={inputElement}
    />
  ));

  return (
    <label className="">
      <input
        type="checkbox"
        className=""
        ref={inputElement}
        onChange={(e) => console.log(e.target.checked)}
      />
      <span className="menu">
        {" "}
        <span className="hamburger"></span>{" "}
      </span>
      <ul className={` flex-col flex`}>
        {/* <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Contact</a>{" "}
        </li> */}

        {/* home */}
        {/* <Link href={"/"} className="text-left font-semibold mt-4">
          <p onClick={handleClick}>HOME</p>
        </Link> */}

        {menuLinkEl}

        {/* menu */}
        {/* <Link href={"/menu"} className="text-left font-semibold mt-4">
          <p onClick={handleClick}>MENU</p>
        </Link> */}

        {/* about */}
        {/* <Link href={"/about-us"} className="text-left font-semibold mt-4">
          <p onClick={handleClick}>ABOUT US</p>
        </Link> */}

        {/* hours and location */}
        {/* <Link href={"/hours-location"} className="text-left font-semibold mt-4">
          <p onClick={handleClick}>HOURS + LOCATION</p>
        </Link> */}

        {/* buttons */}
        <div className="flex flex-col gap-3 mt-8">
          {/* <Button>TAKEOUT</Button>
                <Button>RESERVE</Button> */}
        </div>
      </ul>
    </label>
  );
}
