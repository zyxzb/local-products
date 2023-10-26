import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import qs from 'query-string';

interface FormDataProps {
  name: string;
  location: string;
}

const useHandleSearch = (formData: FormDataProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const { name, location } = formData;

      if (!name && !location) {
        router.push('/ogloszenia');
      } else {
        let currentQuery = {};

        if (params) {
          currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
          ...currentQuery,
          title: name,
          location,
        };

        const url = qs.stringifyUrl(
          {
            url: '/ogloszenia',
            query: updatedQuery,
          },
          { skipNull: true },
        );

        router.push(url);
      }
    },
    [formData.name, formData.location, router],
  );

  return { handleSearch };
};

export default useHandleSearch;
