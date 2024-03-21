"use client";
import { useState, useLayoutEffect } from "react";
import { ScrollSpy } from "@/components/scrollspy/ScrollSpy";
import "../shared/Nav/nav.css";

// https://blog.devgenius.io/diy-scrollspy-4f1c270cafaf

// Abstracted from ScrollSpy to allow for easier customizations
// @ts-ignore
const onScrollUpdate = (entry, isInVewPort) => {
  const { target, boundingClientRect } = entry;
  const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
  if (boundingClientRect.y <= 0 && isInVewPort) {
    // @ts-ignore
    menuItem.classList.add("active");
  } else {
    // @ts-ignore
    if (menuItem.classList.contains("active")) {
      // @ts-ignore
      menuItem.classList.remove("active");
    }
  }
};

// @ts-ignore
const NavMenu = ({ options }) => {
  // control the click event
  // @ts-ignore
  const onClick = (e) => {
    e.preventDefault();
    // Set the hash
    window.location.hash = e.target.hash;

    // Scroll to the section + 1 to account for weird bug.
    // remove the `+1` and click on Section 2 link to see the bug.
    const targetSection = document.querySelector(`${e.target.hash}`);
    // @ts-ignore
    window.scrollTo(0, targetSection.offsetTop + 1);
  };

  return (
    <nav
      className="sticky top-24"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <ul className="list-none ps-0">
        {/* @ts-ignore */}
        {options.map((option) => (
          <li key={option.hash} className="mb-1">
            <a
              href={`#${option.hash}`}
              onClick={(e) => onClick(e)}
              data-scrollspy-id={option.hash}
              className="font-bold block p-4 animate-character tracking-widest"
            >
              {option.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// @ts-ignore
export const WithNavMenu = ({ children, selector }) => {
  const [options, setOptions] = useState([]);
  useLayoutEffect(() => {
    const navMenuSections = document.querySelectorAll(selector);
    const optionsFromSections = Array.from(navMenuSections).map((section) => {
      return {
        hash: section.id,
        title: section.dataset.navTitle,
      };
    });
    // @ts-ignore
    setOptions(optionsFromSections);
  }, [selector]);

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <ScrollSpy handleScroll={onScrollUpdate} />
      <div className="relative">
        <NavMenu options={options} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
