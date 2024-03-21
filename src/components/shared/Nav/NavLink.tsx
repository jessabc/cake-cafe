import Link from "next/link";
import React from "react";

interface Props {
  menuLink: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavLink({ menuLink, setIsOpen }: Props) {
  return (
    <Link
      href={`/${menuLink}`}
      className={`text-left font-semibold mt-4 text-violet-600 text-2xl animate-character`}
      onClick={() => setIsOpen(false)}
    >
      {menuLink.toUpperCase().replace("-", " ")}
    </Link>
  );
}
