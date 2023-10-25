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

export const formatFullDate = (mongoDate: string) => {
  const createdAtDate = new Date(mongoDate);
  const formattedDateTime = `${createdAtDate.toLocaleDateString()}, godz. ${createdAtDate.getHours()}:${createdAtDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
  return formattedDateTime;
};
