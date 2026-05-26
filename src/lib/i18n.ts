export const locales = ['th', 'en', 'zh', 'ru', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'th';

export const localeNames: Record<Locale, string> = {
    th: 'ไทย',
    en: 'English',
    zh: '中文',
    ru: 'Русский',
    ja: '日本語',
    ko: '한국어',
};

export const localeFlags: Record<Locale, string> = {
    th: '🇹🇭',
    en: '🇬🇧',
    zh: '🇨🇳',
    ru: '🇷🇺',
    ja: '🇯🇵',
    ko: '🇰🇷',
};

const dictionaries = {
    th: () => import('./dictionaries/th.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    zh: () => import('./dictionaries/zh.json').then((module) => module.default),
    ru: () => import('./dictionaries/ru.json').then((module) => module.default),
    ja: () => import('./dictionaries/ja.json').then((module) => module.default),
    ko: () => import('./dictionaries/ko.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    if (!locales.includes(locale)) {
        return dictionaries[defaultLocale]();
    }
    return dictionaries[locale]();
};
