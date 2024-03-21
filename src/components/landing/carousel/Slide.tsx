import React from "react";
import { Slide } from "@/types/types";

interface Props {
  slide: Slide;
}

export default function Slide({ slide }: Props) {
  return (
    <div className="hs-carousel-slide ">
      <div
        className="flex justify-center h-full bg-violet-500 p-6 relative"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img
          src={slide.image}
          alt=""
          className="absolute -top-20 opacity-80 "
        />
        <span className="self-center text-4xl transition duration-700 absolute ml-auto mr-auto left-0 right-0 text-center text-violet-100 tracking-widest font-bold">
          {slide.text}
        </span>
      </div>
    </div>
  );
}
