import english from './en.json';

const LANGUAGES = {
  ENGLISH: 'en'
};

export const getI18n = ({
  currentLocale = 'en'
}: {
  currentLocale?: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
};
