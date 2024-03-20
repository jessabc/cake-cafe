import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  category: string;
  type: string;
}

export default function Category({ category, type }: Props) {
  return (
    <Link href={type === "ABOUT" ? `/${category}` : `/menu/${category}`}>
      <Button variant="ghost">{category.replace("-", " ")}</Button>
    </Link>
  );
}
