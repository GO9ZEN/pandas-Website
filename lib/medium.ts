export type Post = {
  id: string;
  title: string;
  url: string;
  category: string;
  readTime: string;
  thumbnail: string;
};

function estimateReadTime(content: string): string {
  const words = content?.replace(/<[^>]*>/g, "").split(/\s+/).length ?? 0;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function guessCategory(title: string): string {
  const t = title.toLowerCase();
  if (
    t.includes("discipline") ||
    t.includes("consistent") ||
    t.includes("habit")
  )
    return "Discipline";
  if (
    t.includes("success") ||
    t.includes("win") ||
    t.includes("build") ||
    t.includes("start")
  )
    return "Success";
  if (
    t.includes("mind") ||
    t.includes("peace") ||
    t.includes("meditat") ||
    t.includes("focus")
  )
    return "Mindset";
  if (
    t.includes("ai") ||
    t.includes("tech") ||
    t.includes("study") ||
    t.includes("hack")
  )
    return "Growth";
  if (
    t.includes("truth") ||
    t.includes("real") ||
    t.includes("late") ||
    t.includes("save")
  )
    return "Reality";
  return "Mindset";
}

type MediumItem = {
  title: string;
  link: string;
  content: string;
  thumbnail: string;
};

export async function getMediumPosts(maxResults = 6): Promise<Post[]> {
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pandas_lk`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      console.error("Medium RSS fetch failed");
      return [];
    }

    const data = await res.json();

    const posts: Post[] = data.items.map((item: MediumItem, index: number) => ({
      id: String(index),
      title: item.title ?? "",
      url: item.link ?? "",
      category: guessCategory(item.title ?? ""),
      readTime: estimateReadTime(item.content ?? ""),
      thumbnail: item.thumbnail ?? "",
    }));

    return posts.slice(0, maxResults);
  } catch (error) {
    console.error("Medium fetch error:", error);
    return [];
  }
}
