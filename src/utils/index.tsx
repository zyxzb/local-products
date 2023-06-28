import { WojewodztwaProps, MiastaProps, DzielniceProps } from '@/types';
import * as Yup from 'yup';

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

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Pole imię jest wymagane'),
  email: Yup.string()
    .required('Pole email jest wymagane')
    .email('Nieprawidłowy adres email'),
  message: Yup.string().required('Pole wiadomość jest wymagane'),
});
