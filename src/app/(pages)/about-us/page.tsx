import React from "react";
import { aboutUsData } from "@/data/aboutUsData";
import PageLayout from "@/components/shared/pageLayout/PageLayout";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CAKE&CO | ABOUT US",
  description: "Cupcake ipsum dolor sit amet toffee",
};

export default function AboutUsPage() {
  const paragraphs = aboutUsData.text.split("/n/");

  return (
    <PageLayout header="ABOUT US">
      <section
        className="flex flex-col gap-5"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {aboutUsData.title}
        </h2>

        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
            {paragraph}
          </p>
        ))}
      </section>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col">
          {/* <Image
            src={aboutUsData.image1}
            alt="dessert image"
            width="0"
            height="0"
            sizes="100vw"
            className="object-cover h-96 rounded-lg w-full"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          /> */}
          <img
            src={aboutUsData.image1}
            alt="dessert image"
            className="object-cover h-96 rounded-lg w-full"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          />
          <figure className="text-xs">
            Photo by Sebastian Coman Photography from Unsplash
          </figure>
        </div>
        <div className="flex flex-col">
          {/* <Image
            src={aboutUsData.image2}
            width="0"
            height="0"
            sizes="100vw"
            alt="dessert image"
            className="object-cover h-96 rounded-lg w-full"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          /> */}
          <img
            src={aboutUsData.image2}
            width="0"
            height="0"
            sizes="100vw"
            alt="dessert image"
            className="object-cover h-96 rounded-lg w-full"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          />
          <figure className="text-xs">
            Photo by Harper Nguyen from Unsplash
          </figure>
        </div>
      </div>
    </PageLayout>
  );
}
