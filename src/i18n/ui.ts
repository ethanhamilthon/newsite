export const LANGS = ['kz', 'ru', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'kz';

export const HTML_LANG: Record<Lang, string> = { kz: 'kk', ru: 'ru', en: 'en' };

const kz = {
  'meta.title': 'Yerdana — ИИ, контент, курстар',
  'meta.description': 'ИИ арқылы фото, видео және контент жасауды үйренемін және үйретемін. Курстар, видеолар, блог.',
  'site.name': 'Ердана Ербол',
  'nav.home': 'Басты бет',
  'nav.blog': 'Блог',
  'stats.videos': 'Видео',
  'stats.students': 'Оқушы',
  'stats.studentsPeriod': 'соңғы 1 жылда',
  'about.label': 'Мен туралы',
  'about.role': 'AI Agent Designer',
  'about.text':
    'Армысың! Мен Ердана, ИИ агенттер жайлы контент жасаймын. Мақсатым - қарапайым тілде күрделі ИИ тақырыбын барлық адамдарға түсіндіру. 7 жыл Дизайн/Маркетингте, 4 жыл AI/IT-да тәжірибем бар',
  'course.label': 'Курс',
  'course.cta': 'Толығырақ',
  'course.kzOnly': '',
  'working.label': 'Жұмыста',
  'working.jin': 'Терминалға арналған минималды кодинг-агент (Go)',
  'youtube.label': 'YouTube',
  'youtube.latest': 'Соңғы видеолар',
  'youtube.all': 'Арнаға өту',
  'youtube.empty': 'Видеолар жақында шығады',
  'social.label': 'Байланыс',
  'social.whatsapp': 'WhatsApp',
  'social.telegram': 'Telegram',
  'social.telegramChannel': 'TG арна',
  'blog.label': 'Блог',
  'blog.all': 'Барлық жазбалар',
  'blog.empty': 'Әзірге жазба жоқ',
  'blog.back': '← Блогқа',
  'footer.rights': 'Барлық құқықтар қорғалған',
};

type Dict = Record<keyof typeof kz, string>;

const ru: Dict = {
  'meta.title': 'Yerdana — ИИ, контент, курсы',
  'meta.description': 'Учусь и учу создавать фото, видео и контент с помощью ИИ. Курсы, видео, блог.',
  'site.name': 'Ердана Ербол',
  'nav.home': 'Главная',
  'nav.blog': 'Блог',
  'stats.videos': 'Видео',
  'stats.students': 'Учеников',
  'stats.studentsPeriod': 'за последний год',
  'about.label': 'Обо мне',
  'about.role': 'AI Agent Designer',
  'about.text':
    'Привет! Я Ердана, делаю контент об ИИ-агентах. Моя цель - объяснять сложную тему ИИ простым языком всем людям. У меня 7 лет опыта в дизайне и маркетинге и 4 года в AI/IT',
  'course.label': 'Курс',
  'course.cta': 'Подробнее',
  'course.kzOnly': 'Курс на казахском',
  'working.label': 'В работе',
  'working.jin': 'Минималистичный кодинг-агент для терминала на Go',
  'youtube.label': 'YouTube',
  'youtube.latest': 'Последние видео',
  'youtube.all': 'Перейти на канал',
  'youtube.empty': 'Видео скоро появятся',
  'social.label': 'Связь',
  'social.whatsapp': 'WhatsApp',
  'social.telegram': 'Telegram',
  'social.telegramChannel': 'TG канал',
  'blog.label': 'Блог',
  'blog.all': 'Все записи',
  'blog.empty': 'Пока нет записей',
  'blog.back': '← В блог',
  'footer.rights': 'Все права защищены',
};

const en: Dict = {
  'meta.title': 'Yerdana — AI, content, courses',
  'meta.description': 'I learn and teach how to create photos, videos and content with AI. Courses, videos, blog.',
  'site.name': 'Yerdana Yerbol',
  'nav.home': 'Home',
  'nav.blog': 'Blog',
  'stats.videos': 'Videos',
  'stats.students': 'Students',
  'stats.studentsPeriod': 'in the last year',
  'about.label': 'About me',
  'about.role': 'AI Agent Designer',
  'about.text':
    "Hi! I'm Yerdana, I create content about AI agents. My goal is to explain the complex topic of AI in plain language to everyone. I have 7 years of experience in design and marketing and 4 years in AI/IT",
  'course.label': 'Course',
  'course.cta': 'Learn more',
  'course.kzOnly': 'Course in Kazakh',
  'working.label': 'Working on',
  'working.jin': 'Minimal coding agent for the terminal, written in Go',
  'youtube.label': 'YouTube',
  'youtube.latest': 'Latest videos',
  'youtube.all': 'Open channel',
  'youtube.empty': 'Videos coming soon',
  'social.label': 'Contact',
  'social.whatsapp': 'WhatsApp',
  'social.telegram': 'Telegram',
  'social.telegramChannel': 'TG channel',
  'blog.label': 'Blog',
  'blog.all': 'All posts',
  'blog.empty': 'No posts yet',
  'blog.back': '← Back to blog',
  'footer.rights': 'All rights reserved',
};

const UI: Record<Lang, Dict> = { kz, ru, en };

export type UIKey = keyof Dict;

export function useT(lang: Lang) {
  return (key: UIKey) => UI[lang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return (LANGS as readonly string[]).includes(first) && first !== DEFAULT_LANG
    ? (first as Lang)
    : DEFAULT_LANG;
}

/** Path prefix for a language: '' for kz, '/ru', '/en'. */
export function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

/** Build a localized path, e.g. localePath('ru', '/blog/') => '/ru/blog/'. */
export function localePath(lang: Lang, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${langPrefix(lang)}${p}` || '/';
}

export function dateLocale(lang: Lang): string {
  return { kz: 'kk-KZ', ru: 'ru-RU', en: 'en-US' }[lang];
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(dateLocale(lang), { year: 'numeric', month: 'short', day: 'numeric' });
}
