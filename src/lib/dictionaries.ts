import 'server-only';

export type Dictionary = {
  home: typeof import('./contents/es/home').homeContent;
  header: typeof import('./contents/es/header').headerBrand;
  footer: typeof import('./contents/es/footer').footerContent;
};

const dictionaries = {
  es: () => import('./contents/es').then(module => module.es),
  en: () => import('./contents/en').then(module => module.en),
};

export const getDictionary = async (locale: 'es' | 'en'): Promise<Dictionary> =>
  dictionaries[locale]?.() ?? dictionaries.es();
