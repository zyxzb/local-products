import { useState } from 'react';
import useDebounce from './useDebounce';
import { miasta } from '@/data/miasta';
import { dzielnice } from '@/data/dzielnice';
import { wojewodztwa } from '@/data/wojewodztwa';
import { convertDzielniceFormat, mergeCitiesWithAreas } from '@/utils/helpers';

const useSearchBar = (
  formData: { name: string; location: string } | { location: string },
) => {
  const [mergedLocation, setMergedLocation] = useState<any[]>([]);

  // debounce query results
  useDebounce(
    () => {
      // Filter Cities
      const filteredSearch = miasta.filter((miasto) =>
        miasto.name.toLowerCase().includes(formData.location.toLowerCase()),
      );

      // Filter districts of Warsaw
      const filteredDzielnice = dzielnice.filter((dzielnica) =>
        dzielnica.text.toLowerCase().includes(formData.location.toLowerCase()),
      );

      // Convert object format
      const convertedDzielnice = convertDzielniceFormat(filteredDzielnice);

      // Add the found districts to the search results
      const mergedSearch = [...convertedDzielnice, ...filteredSearch];

      // merge locations with areas
      if (
        mergedSearch.length !== miasta.length + dzielnice.length &&
        mergedSearch.length !== 0
      ) {
        setMergedLocation(mergeCitiesWithAreas(mergedSearch, wojewodztwa));
      } else {
        setMergedLocation([]);
      }
    },
    [formData.location],
    700,
  );

  return { mergedLocation };
};

export default useSearchBar;
