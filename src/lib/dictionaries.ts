import 'server-only';
import { LanguageList } from './types/core/language';

export type Dictionary = {
  home: typeof import('./contents/es/home').homeContent;
  header: typeof import('./contents/es/header').headerBrand;
  footer: typeof import('./contents/es/footer').footerContent;
};

const dictionaries = {
  [LanguageList.ES]: () => import('./contents/es').then(module => module.es),
  [LanguageList.EN]: () => import('./contents/en').then(module => module.en),
};

export const getDictionary = async (
  locale: LanguageList
): Promise<Dictionary> =>
  dictionaries[locale]?.() ?? dictionaries[LanguageList.ES]();
