import Link from "next/link";
import React from "react";
import "./nav.css";

interface Props {
  menuLink: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavLink({ menuLink, setIsOpen }: Props) {
  return (
    <Link
      href={`/${menuLink}`}
      className={`text-left font-bold mt-4 text-violet-600 text-xl md:text-3xl animate-character drop-shadow-xl`}
      onClick={() => setIsOpen(false)}
    >
      {menuLink.toUpperCase().replace("-", " ")}
    </Link>
  );
}
