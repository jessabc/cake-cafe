import PageLayout from "@/components/shared/pageLayout/PageLayout";
import React from "react";
import "./styles.css";
import ScrollSpyNav from "@/components/scrollspy/ScrollSpyNav";
import { lunch, dinner, weekend } from "@/data/menuData";

export default function MenuCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const getData = () => {
    switch (params.category) {
      case "lunch":
        return lunch;
      case "dinner":
        return dinner;
      case "weekend":
        return weekend;
    }
  };
  return (
    <PageLayout header={params.category}>
      <ScrollSpyNav data={getData()} />
    </PageLayout>
  );
}
