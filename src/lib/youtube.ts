import { SOCIAL } from '../config';

export interface Video {
  id: string;
  title: string;
  published: Date;
  thumb: string;
  url: string;
}

let cache: Promise<Video[]> | null = null;

function decode(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function fetchVideos(): Promise<Video[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${SOCIAL.youtubeChannelId}`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const entries = xml.split('<entry>').slice(1);
    return entries
      .map((e) => {
        const id = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? '';
        const title = decode(e.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
        const published = new Date(e.match(/<published>([^<]+)<\/published>/)?.[1] ?? 0);
        const isShort = /\/shorts\//.test(e);
        return { id, title, published, isShort };
      })
      .filter((v) => v.id)
      .map(({ id, title, published, isShort }) => ({
        id,
        title,
        published,
        thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        url: isShort ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
      }));
  } catch (err) {
    console.warn(`[youtube] RSS fetch failed: ${(err as Error).message}`);
    return [];
  }
}

/** Latest public videos from the channel RSS. Fetched once per build. */
export async function getLatestVideos(limit = 6): Promise<Video[]> {
  cache ??= fetchVideos();
  return (await cache).slice(0, limit);
}
