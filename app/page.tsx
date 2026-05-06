import BetterPreview from "@/components/BetterPreview";
import BlogPreview from "@/components/BlogPreview";
import Hero from "@/components/Hero";
import StoriesPreview from "@/components/StoriesPreview";
import CommunitySection from "@/components/CommunitySection";
import ShopPreview from "@/components/ShopPreview";
import IdeasSection from "@/components/IdeasSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StoriesPreview />
      <BlogPreview />
      <BetterPreview />
      <IdeasSection />
      <ShopPreview />
      <CommunitySection />
    </>
  );
}
