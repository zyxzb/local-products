import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { categories as allCategories } from '@/data/categories';

interface MiastaProps {
  id: number;
  name: string;
  unique_name: string;
  county_id: number;
  voivodeship_id: number;
  latitude: string;
  longitude: string;
  name_locative: string;
}
interface DzielniceProps {
  id: string;
  city_id: string;
  text: string;
  text_district: string;
  unique_name: string;
  lon: string;
  lat: string;
}

interface WojewodztwaProps {
  id: number;
  name: string;
  unique_name: string;
  name_locative: string;
}

export const convertDzielniceFormat = (filteredDzielnice: DzielniceProps[]) => {
  return filteredDzielnice.map((dzielnica) => {
    return {
      id: parseInt(dzielnica.id + 0),
      name: dzielnica.text,
      unique_name: dzielnica.unique_name,
      county_id: parseInt(dzielnica.city_id),
      voivodeship_id: 7,
      latitude: dzielnica.lat,
      longitude: dzielnica.lon,
      name_locative: dzielnica.unique_name,
    };
  });
};

export const mergeCitiesWithAreas = (
  filteredSearch: MiastaProps[],
  wojewodztwa: WojewodztwaProps[],
) => {
  const mergedData = filteredSearch.map((miasto) => {
    const wojewodztwo = wojewodztwa.find(
      (woj) => woj.id === miasto.voivodeship_id,
    );
    return {
      ...miasto,
      wojewodztwo: wojewodztwo ? wojewodztwo.name : 'Nieznane wojewodztwo',
    };
  });
  return mergedData;
};

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
