import Link from "next/link";
import React from "react";

export default function NavLink({ menuLink, setIsOpen }) {
  return (
    <Link
      href={`/${menuLink}`}
      className={`text-left font-semibold mt-4 text-violet-600 text-2xl `}
      onClick={() => setIsOpen(false)}
    >
      {menuLink.toUpperCase().replace("-", " ")}
    </Link>
  );
}
