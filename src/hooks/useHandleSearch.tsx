import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface FormDataProps {
  name: string;
  location: string;
}

const useHandleSearch = (formData: FormDataProps) => {
  const router = useRouter();

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const { name, location } = formData;
      const searchParams = new URLSearchParams(window.location.search);

      if (!name && !location) {
        router.push('/ogloszenia');
      } else {
        if (name) {
          searchParams.set('title', name);
        } else {
          searchParams.delete('title');
        }
        if (location) {
          searchParams.set('location', location);
        } else {
          searchParams.delete('location');
        }
        const newPathName = `/ogloszenia?${searchParams.toString()}`;
        router.push(newPathName);
      }
    },
    [formData.name, formData.location, router],
  );

  return { handleSearch };
};

export default useHandleSearch;
