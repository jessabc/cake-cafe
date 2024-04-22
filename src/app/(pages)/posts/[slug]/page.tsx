import React from "react";
import { postsData } from "@/data/postsData";
import type { Metadata } from "next";
import PageLayout from "@/components/shared/pageLayout/PageLayout";
import Image from "next/image";
import { Post } from "@/types/types";

export const metadata: Metadata = {
  title: "CAKE&CO | BLOG",
  description: "Cupcake ipsum dolor sit amet toffee",
};

export default function postPage({ params }: { params: { slug: string } }) {
  const thisPost = postsData.find((post) => post.slug === params.slug);

  return (
    <PageLayout header="BLOG">
      {/* // <!-- Blog Article --> */}
      <div
        className="max-w-3xl pt-6 lg:pt-10 pb-12 px-5 md:px-10 mx-auto "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="max-w-2xl">
          {/* <!-- Avatar Media --> */}
          {thisPost && (
            <div className="flex justify-between items-center mb-6">
              <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="flex-shrink-0">
                  <Image
                    className="object-cover w-14 h-14 rounded-full "
                    src={thisPost.authorImage}
                    width="0"
                    height="0"
                    sizes="100vw"
                    alt="author image"
                  />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-center gap-x-2">
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {thisPost?.author}
                      </span>
                      <ul className="text-xs text-gray-500">
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                          {thisPost?.date}
                        </li>
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                          {thisPost?.readTime} min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* <!-- End Avatar Media --> */}

          {/* <!-- Content --> */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                {thisPost?.title}
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {thisPost?.paragraph}
              </p>
              <p className="uppercase text-sm font-semibold">
                Photo by {thisPost?.attribute} from Unsplash
              </p>
            </div>
            <figure>
              <div className="flex justify-center items-center">
                <Image
                  className="object-cover h-96 w-full"
                  src={`/${thisPost?.image}`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="dessert image"
                />
              </div>
            </figure>
          </div>
          {/* <!-- End Content --> */}
        </div>
      </div>
    </PageLayout>
  );
}
