export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  thumbnail: string;
};

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export async function getChannelVideos(maxResults = 6): Promise<Video[]> {
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!CHANNEL_ID) {
    console.error("Missing YOUTUBE_CHANNEL_ID in .env.local");
    return [];
  }

  try {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

    console.log("Fetching via rss2json:", url);

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error("rss2json fetch failed:", res.status);
      return [];
    }

    const data = await res.json();

    console.log("rss2json status:", data.status);
    console.log("Items found:", data.items?.length);

    if (data.status !== "ok" || !data.items) {
      console.error("rss2json error:", data.message);
      return [];
    }

    const videos: Video[] = data.items
      .map((item: { id: string; title: string; link: string }) => {
        const youtubeId = item.link.split("v=")[1]?.split("&")[0] ?? "";
        return {
          id: youtubeId,
          youtubeId,
          title: item.title ?? "",
          thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
        };
      })
      .filter((v: Video) => v.youtubeId !== "");

    return shuffle(videos).slice(0, maxResults);
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
