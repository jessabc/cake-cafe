import Carousel from "@/components/landing/carousel/Carousel";
import PostsSection from "@/components/landing/postSection/PostsSection";
import TopSection from "@/components/landing/topSection/TopSection";

export default function Home() {
  return (
    <main className="">
      <Carousel />
      <div className=" mx-5 md:mx-10">
        <TopSection />
        <PostsSection />
      </div>
    </main>
  );
}
