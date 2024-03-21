import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Post } from "@/types/types";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="hover:-translate-y-3 duration-700"
    >
      <Card
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div>
          <img
            src={post.image}
            alt=""
            className="object-cover w-full h-56 rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="uppercase text-xs font-semibold line-clamp-1">
            Photo by {post.attribute} from Unsplash
          </p>
          <p className="line-clamp-4">{post.paragraph}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
