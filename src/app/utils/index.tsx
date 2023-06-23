import { WojewodztwaProps } from '@/app/types';
import { MiastaProps } from '@/app/types';
import * as Yup from 'yup';

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
