import ScrollSpyNav from "@/components/scrollspy/ScrollSpyNav";
import PageLayout from "@/components/shared/pageLayout/PageLayout";
import React from "react";
import { menu } from "@/data/menuData";
import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAKE&CO | MENU",
  description: "Cupcake ipsum dolor sit amet toffee",
};

export default function MenuPage() {
  return (
    <PageLayout header={"MENU"}>
      <ScrollSpyNav data={menu} />
    </PageLayout>
  );
}
