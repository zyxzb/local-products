import { WojewodztwaProps } from '@/app/types';
import { MiastaProps } from '@/app/types';

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
