import React from "react";
import { topSectionData } from "@/data/topSectionData";
import TopSectionCard from "./TopSectionCard";

export default function TopSection() {
  const cardEl = topSectionData.map((card, index) => (
    <TopSectionCard key={index} card={card} index={index} />
  ));

  return <div className="my-10 flex flex-col gap-5">{cardEl}</div>;
}
