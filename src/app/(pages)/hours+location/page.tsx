import PageLayout from "@/components/shared/pageLayout/PageLayout";
import React from "react";
import { address, hours } from "@/data/footerData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAKE&CO | HOURS + LOCATION",
  description: "Cupcake ipsum dolor sit amet toffee",
};

export default function HoursLocationPage() {
  const hoursEl = hours.map((item) => {
    return (
      <>
        <span>{item.day}</span>
        <span>
          {item.open}
          {parseInt(item.open) > 11 ? "PM" : "AM"}
        </span>
        <span>{item.close}PM</span>
      </>
    );
  });

  return (
    <PageLayout
      header="HOURS + 
    LOCATION"
    >
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 items-center md:flex-row  md:justify-center md:items-start md:gap-20">
          {/* address */}
          <div
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <p className="font-bold">{address.title}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.phone}</p>
          </div>

          {/* hours */}
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <p className="font-bold">HOURS</p>
            <div className="grid grid-cols-3 gap-1 gap-x-2">
              <span className="font-semibold text-sm">DAY</span>
              <span className="font-semibold text-sm">OPEN</span>
              <span className="font-semibold text-sm">CLOSE</span>
              {hoursEl}
            </div>
          </div>
        </div>

        {/* images */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mt-5">
          <img
            src={"image28.jpg"}
            alt=""
            className="object-cover h-96"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          />
          <img
            src={"image29.jpg"}
            alt=""
            className="object-cover h-96"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          />
        </div>
      </section>
    </PageLayout>
  );
}
