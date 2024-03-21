"use client";
import React from "react";
import { WithNavMenu } from "./NavMenu";
import Section from "./Section";
import { ISection } from "@/types/types";

interface Props {
  menu: ISection[];
}

export default function ScrollSpyNav({ menu }: Props) {
  const sectionEl = menu.map((section: ISection, index: number) => (
    <Section key={index} section={section} />
  ));
  return (
    <div className="scroll-smooth">
      <WithNavMenu selector="section">{sectionEl}</WithNavMenu>
    </div>
  );
}
