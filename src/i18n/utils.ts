import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const translations = { es, en };

// Returns the full translation object for a given language.
// Usage: const t = useTranslations('es')
//        t('hero.title')
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === 'string' ? value : key;
  };
}

// Detects lang from the URL path prefix: /en/... → 'en', default → 'es'
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return 'es';
}
