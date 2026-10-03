// Single place for links and numbers shown on the site.

export const SITE = {
  url: 'https://yerdana.com',
  name: 'Yerdana',
  handle: '@yerdana',
};

export const SOCIAL = {
  whatsapp: '77079946317',
  telegram: 'yerdanaaaaaa',
  telegramChannel: 'yensgen',
  instagram: 'yerdana.here',
  tiktok: 'yerdanaaaaaa',
  youtube: 'yerdanastudio',
  youtubeChannelId: 'UCtGYpvdwAza6dhUGEKGNubA',
};

export const LINKS = {
  whatsapp: `https://wa.me/${SOCIAL.whatsapp}`,
  telegram: `https://t.me/${SOCIAL.telegram}`,
  telegramChannel: `https://t.me/${SOCIAL.telegramChannel}`,
  instagram: `https://instagram.com/${SOCIAL.instagram}`,
  tiktok: `https://www.tiktok.com/@${SOCIAL.tiktok}`,
  youtube: `https://www.youtube.com/@${SOCIAL.youtube}`,
};

/** WhatsApp link with a prefilled message. */
export function waLink(text: string): string {
  return `${LINKS.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Placeholder numbers. Replace with real ones.
export const STATS = {
  tiktok: '48.2K',
  instagram: '21.7K',
  youtube: '12.4K',
  videos: '214',
  students: '320',
};
