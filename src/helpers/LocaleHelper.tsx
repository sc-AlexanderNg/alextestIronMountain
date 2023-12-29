export type LocaleMap = {
  source: string;
  destination: string;
};

export const ALL_LOCALE_MAPS: LocaleMap[] = [
  { source: 'en-ae', destination: 'en-ai' },
  { source: 'en-bh', destination: 'en-bb' },
  { source: 'en-eg', destination: 'en-gy' },
  { source: 'en-jo', destination: 'en-io' },
  { source: 'en-kw', destination: 'en-ki' },
  { source: 'en-om', destination: 'en-mo' },
  { source: 'en-sa', destination: 'en-sb' },
];

export const getLocale = (locale: string | undefined): string => {
  const mapItem = ALL_LOCALE_MAPS.find((m) => {
    return m.source === locale;
  });

  if (mapItem) {
    return mapItem.destination;
  }

  return locale || 'en';
};

export const getLocaleReverse = (locale: string | undefined): string => {
  const mapItem = ALL_LOCALE_MAPS.find((m) => {
    return m.destination === locale;
  });

  if (mapItem) {
    return mapItem.source;
  }

  return locale || 'en';
};
