import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    // <div className=" fixed z-50 pt-2 pl-4 text-violet-600 ">
    <Link href={"/"} className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-cake"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
        <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
        <path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
      </svg>
      <span className="text-sm font-semibold">CAKE&CO</span>
    </Link>
    // </div>
  );
}
