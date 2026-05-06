import { getChannelVideos } from "@/lib/youtube";
import StoriesCarousel from "./StoriesCarousel";

export default async function StoriesPreview() {
  const stories = await getChannelVideos(6);
  console.log("Stories fetched:", stories.length, stories);
  return <StoriesCarousel stories={stories} />;
}
