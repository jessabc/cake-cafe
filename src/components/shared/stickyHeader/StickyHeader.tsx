"use client";

import React, { useEffect, useState } from "react";
import NavDrawer from "../navDrawer/NavDrawer";

export default function StickyHeader() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header
      className={`header ${small ? "bg-blue-500 static" : "absolute z-50"}`}
    >
      <NavDrawer />
    </header>
  );
}

//  opacity-50
