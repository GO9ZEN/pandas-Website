import { getMediumPosts } from "@/lib/medium";
import BlogCarousel from "./BlogCarousel";

export default async function BlogPreview() {
  const posts = await getMediumPosts(6);
  return <BlogCarousel posts={posts} />;
}
