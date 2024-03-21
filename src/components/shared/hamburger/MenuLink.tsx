"use client";
import Link from "next/link";
import React from "react";

export default function MenuLink({ menuLink, handleClick, inputElement }) {
  console.log(menuLink);
  return (
    <Link
      href={`/${menuLink}`}
      className={`text-left font-semibold mt-4 text-violet-600 text-2xl `}
      onClick={handleClick}
    >
      {menuLink.toUpperCase().replace("-", " ")}
    </Link>
  );
}
