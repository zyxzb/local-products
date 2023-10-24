import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { User } from '@prisma/client';
import { toast } from 'react-toastify';

interface IUseFavorite {
  listingId: string;
  currentUser?: User | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteAds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);
  console.log('useFavorites Current User', currentUser);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      if (!currentUser) {
        return toast.info('Aby dodać do ulubionych musisz być zalogowany');
      }
      try {
        let request;

        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
          toast.info('Usunięto z ulubionych');
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
          toast.success('Dodano do ulubionych');
        }
        await request();
        router.refresh();
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [currentUser, hasFavorite, listingId, router],
  );
  return { hasFavorite, toggleFavorite };
};

export default useFavorite;
