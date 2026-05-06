import { getMediumPosts } from "@/lib/medium";
import BlogGrid from "@/components/BlogGrid";

export default async function BlogPage() {
  const posts = await getMediumPosts(50);
  return <BlogGrid posts={posts} />;
}