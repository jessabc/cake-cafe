"use client";
import { useState, useLayoutEffect } from "react";
import { ScrollSpy } from "@/components/scrollspy/ScrollSpy";

// Abstracted from ScrollSpy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort) => {
  const { target, boundingClientRect } = entry;
  const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
  if (boundingClientRect.y <= 0 && isInVewPort) {
    menuItem.classList.add("active");
  } else {
    if (menuItem.classList.contains("active")) {
      menuItem.classList.remove("active");
    }
  }
};

const NavMenu = ({ options }) => {
  // control the click event
  const onClick = (e) => {
    e.preventDefault();
    // Set the hash
    window.location.hash = e.target.hash;

    // Scroll to the section + 1 to account for weird bug.
    // remove the `+1` and click on Section 2 link to see the bug.
    const targetSection = document.querySelector(`${e.target.hash}`);
    window.scrollTo(0, targetSection.offsetTop + 1);
  };

  return (
    <nav className="sticky top-24">
      <ul className="list-none ps-0">
        {options.map((option) => (
          <li key={option.hash} className="mb-1">
            <a
              href={`#${option.hash}`}
              onClick={onClick}
              data-scrollspy-id={option.hash}
              className="font-semibold block p-4 hover:text-violet-400"
            >
              {option.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

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
