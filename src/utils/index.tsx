export const capitalizeWord = (s: string) => {
  if (!s || !s.length) return s;
  if (s.length === 1) return s.toUpperCase();
  return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
};

export const capitalizeWords = (phrase: string) => phrase.split(/\s/g).map(w => capitalizeWord(w)).join(' ');