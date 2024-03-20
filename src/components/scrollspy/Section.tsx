import React from "react";

export default function Section({ section }) {
  console.log(section);
  return (
    <section
      id={section.header}
      data-nav-title={section.header}
      data-scrollspy
      className=" bg-violet-50  py-10 px-10"
    >
      {/* pt-28 md:pt-40 */}
      <div>
        <img src={section.svg} alt="" className="" />
      </div>

      <div className="mb-5 ">
        <p className="font-bold text-2xl py-5">{section.header}</p>
        <p>{section.description}</p>
      </div>

      <ul className="flex flex-col gap-5">
        {section.items.map((item) => (
          <li>
            <p className="font-semibold">{item.name}</p>
            <p>{item.description}</p>
            <p className="italic">{item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
