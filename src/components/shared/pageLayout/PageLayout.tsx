import React from "react";

interface Props {
  header: string;
  children: React.ReactNode;
}

export default function PageLayout({ header, children }: Props) {
  return (
    <div>
      <div
        className="bg-gradient-to-r from-violet-300 to-violet-400 -mt-5 pt-28 pb-20 -mx-10 "
        // is a sticky header better?
        // sticky top-0 z-10
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h2 className="text-2xl md:text-4xl font-bold  text-center mt-10 text-violet-50 tracking-widest drop-shadow-xl">
          {header}
        </h2>
      </div>

      <div className="my-10 mt-20  mx-5 md:mx-10">{children}</div>
    </div>
  );
}
