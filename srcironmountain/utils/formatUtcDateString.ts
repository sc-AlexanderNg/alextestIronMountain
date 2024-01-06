const formatUtcDateString = (utc: string, lang = 'en-US') => {
  if (utc) {
    return new Intl.DateTimeFormat(lang, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(utc));
  }

  return '';
};

export default formatUtcDateString;
