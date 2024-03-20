import React from "react";
import Image from "next/image";

// shadcn
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

interface Props {
  card: ITopSectionCard;
  index: number;
}

export default function TopSectionCard({ card, index }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
      <div className={`${index % 2 == 0 && "sm:order-1"} hidden sm:flex `}>
        {/* change to next image */}
        <img src={card.image} className="object-cover w-full sm:h-96 lg:h-72" />
      </div>

      <Card className="lg:px-4">
        <div className="sm:hidden">
          <img src={card.image} alt="" className="object-cover w-full h-56" />
        </div>
        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
          {/* <CardDescription>{card.description}</CardDescription> */}
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
