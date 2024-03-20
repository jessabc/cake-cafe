"use client";
import React from "react";
import { WithNavMenu } from "./NavMenu";
import Section from "./Section";

export default function ScrollSpyNav({ data }) {
  console.log(data);
  const sectionEl = data.map((section, index) => (
    <Section key={index} section={section} />
  ));
  return (
    <div className="scroll-smooth">
      <WithNavMenu selector="section">
        {sectionEl}

        {/* <section id="section1" data-nav-title="test" data-scrollspy>
          fasdsf
        </section>
        <section id="section2" data-nav-title="Section 2" data-scrollspy />
        <section id="section3" data-nav-title="Section 3" data-scrollspy />
        <section id="section4" data-nav-title="tacos" data-scrollspy>
          tacossss
        </section>
        <section id="section5" data-nav-title="Section 5" data-scrollspy />
        <section id="section6" data-nav-title="Section 6" data-scrollspy /> */}
      </WithNavMenu>
    </div>
  );
}
