import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Category from "./Category";

interface Props {
  categories: string[];
  triggerText: string;
}

export default function Accordian({ categories, triggerText }: Props) {
  const categoryEl = categories.map((category) => (
    <Category key={category} category={category} type={triggerText} />
  ));

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="hover:no-underline">
          {triggerText}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3 justify-start items-start ml-5">
          {categoryEl}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
