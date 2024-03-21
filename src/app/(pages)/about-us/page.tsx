import React from "react";
import { aboutUsData } from "@/data/aboutUsData";
import PageLayout from "@/components/shared/pageLayout/PageLayout";
import type { Metadata } from "next";

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
        <img
          src={aboutUsData.image1}
          alt=""
          className="object-cover h-96 rounded-lg"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-once="true"
        />
        <img
          src={aboutUsData.image2}
          alt=""
          className="object-cover h-96 rounded-lg"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-once="true"
        />
      </div>
    </PageLayout>
  );
}
