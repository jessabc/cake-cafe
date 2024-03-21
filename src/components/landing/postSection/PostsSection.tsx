import React from "react";
import { postsData } from "@/data/postsData";
import PostCard from "./PostCard";

export default function PostsSection() {
  const postEl = postsData.map((post, index) => (
    <PostCard key={post.id} post={post} />
  ));

  return (
    <div className="my-10">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Recent Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {postEl}
      </div>
    </div>
  );
}
