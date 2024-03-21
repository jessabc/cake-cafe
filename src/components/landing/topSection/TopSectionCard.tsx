import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ITopSectionCard } from "@/types/types";

interface Props {
  card: ITopSectionCard;
  index: number;
}

export default function TopSectionCard({ card, index }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
      <div
        className={`${index % 2 == 0 && "sm:order-1"} hidden sm:flex`}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <img
          src={card.image}
          className="object-cover w-full sm:h-96 lg:h-72 rounded-lg"
        />
      </div>

      <Card
        className="lg:px-4"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="sm:hidden">
          <img src={card.image} alt="" className="object-cover w-full h-56" />
        </div>
        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="">{card.paragraph}</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={`/${card.link}`}>{card.buttonText}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
