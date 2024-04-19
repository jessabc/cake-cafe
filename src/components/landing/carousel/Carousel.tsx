import React from "react";
import { carouselData } from "@/data/carouselData";

export default function Carousel() {
  return (
    // <!-- Slider -->
    <div
      data-hs-carousel='{
    "loadingclassNamees": "opacity-0",
    "isAutoPlay": true
  }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-screen bg-white ">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          {/* slides - doesnt work as a component? */}
          <div
            className={`hs-carousel-slide bg-hero-one h-screen bg-violet-500 flex justify-center items-center bg-cover bg-center `}
          >
            <span className=" text-4xl  text-violet-600 tracking-widest font-bold text-center px-4 bg-white py-3">
              cake loves tea
            </span>
          </div>
          <div
            className={`hs-carousel-slide bg-hero-two h-screen bg-violet-500 flex justify-center items-center bg-cover bg-center`}
          >
            <span className=" text-4xl  text-violet-600 tracking-widest font-bold text-center px-4 bg-white py-3">
              citrus hearts sugar
            </span>
          </div>
          <div
            className={`hs-carousel-slide bg-hero-three h-screen bg-violet-500 flex justify-center items-center bg-cover bg-center`}
          >
            <span className=" text-4xl  text-violet-600 tracking-widest font-bold text-center px-4 bg-white py-3">
              cupcakes in love
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </span>
      </button>
    </div>
    // <!-- End Slider -->
  );
}
