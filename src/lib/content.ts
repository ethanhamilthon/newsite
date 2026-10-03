import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;
export type Course = CollectionEntry<'courses'>;

/** id looks like "ru/my-post" -> "ru" */
export function postLang(post: Post): Lang {
  return post.id.split('/')[0] as Lang;
}

/** id looks like "ru/my-post" -> "my-post" */
export function postSlug(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft && postLang(p) === lang);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getCourses(): Promise<Course[]> {
  const courses = await getCollection('courses', (c) => !c.data.draft);
  return courses.sort((a, b) => a.data.order - b.data.order);
}

export function formatPrice(n: number): string {
  return n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ');
}
