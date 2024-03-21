import React from "react";
import { ISection } from "@/types/types";

interface Props {
  section: ISection;
}

export default function Section({ section }: Props) {
  return (
    <section
      id={section.header}
      data-nav-title={section.header}
      data-scrollspy
      className=" bg-gradient-to-r from-violet-50 to-violet-200  py-10 px-10"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <div>
        <img src={section.svg} alt="" className="" />
      </div>

      <div className="mb-5 ">
        <p className="font-bold text-2xl py-5">{section.header}</p>
        <p>{section.description}</p>
      </div>

      <ul className="flex flex-col gap-5">
        {section.items.map((item, index: number) => (
          <li key={index}>
            <p className="font-semibold">{item.name}</p>
            <p>{item.description}</p>
            <p className="italic">{item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
