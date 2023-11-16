import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { categories as allCategories } from '@/data/categories';

export const trimText = (text: string, numOfChar: number) => {
  if (text.length > numOfChar) {
    let newText = text.slice(0, numOfChar).replace(/\s?$/, '') + '...';
    return newText;
  }
  return text;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatFullDate = (mongoDate: Date) => {
  return format(mongoDate, 'd MMMM yyyy, H:mm', { locale: pl });
};

export const findCategoryName = (categoryLink: string) => {
  const category = allCategories.find((c) => c.link === categoryLink);
  return category?.label;
};

export const findCategoryIcon = (categoryLink: string) => {
  const category = allCategories.find((c) => c.link === categoryLink);
  return category?.icon;
};
