import Link from "next/link";
import React from "react";

interface Props {
  link: string;
}

export default function FooterLink({ link }: Props) {
  return (
    <Link href={`/${link.toLowerCase()}`} className="md:ml-3">
      {link}
    </Link>
  );
}
