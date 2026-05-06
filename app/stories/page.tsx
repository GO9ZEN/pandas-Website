import { getChannelVideos } from "@/lib/youtube";
import StoriesGrid from "@/components/StoriesGrid";

export default async function StoriesPage() {
  const videos = await getChannelVideos(50);
  return <StoriesGrid videos={videos} />;
}
