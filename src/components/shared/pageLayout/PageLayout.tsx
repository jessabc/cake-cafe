import React from "react";

interface Props {
  header: string;
  children: React.ReactNode;
}

export default function PageLayout({ header, children }: Props) {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-300 to-violet-400 -mt-5 pt-28 pb-20 -mx-10 ">
        <h2 className="text-3xl font-semibold tracking-tight text-center mt-10 text-violet-50 ">
          {header}
        </h2>
      </div>

      <div className="my-10 mt-20  mx-5 md:mx-10">{children}</div>
    </div>
  );
}
