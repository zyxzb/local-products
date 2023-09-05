'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useSession } from 'next-auth/react';
import { AiFillHeart, AiOutlineDelete } from 'react-icons/ai';
import { FaHeartBroken } from 'react-icons/fa';
import { CardProps } from '@/types';
import { useAddToFavorites } from '@/context/addToFavorites';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CardButtons = ({
  item,
  canDelete,
}: {
  item: CardProps;
  canDelete?: true;
}) => {
  const { title, _id, email } = item;
  const { favoritesAds, setFavoritesAds } = useAddToFavorites();
  const session = useSession();
  const router = useRouter();

  const handleAddToFavorites = () => {
    const tempFavoriteAd = favoritesAds.filter((ad) => ad._id === _id);
    if (tempFavoriteAd.length > 0) {
      toast.info(`${title} juz istnieje w polubionych`);
    } else {
      setFavoritesAds([...favoritesAds, item]);
      toast.success(`Dodano: ${title} do polubionych`);
    }
  };

  const handleRemoveFromFavorites = () => {
    const tempFavoritesCard = favoritesAds.filter((ad) => ad._id !== _id);
    setFavoritesAds([...tempFavoritesCard]);
    toast.info(`${title} usunięto z polubionych`);
  };

  const handleDelete = async () => {
    const confirm = window.confirm(
      `Czy na pewno chcesz usunąć ogłoszenie: ${title}?`,
    );

    if (confirm) {
      try {
        await fetch(`/api/ads/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        router.refresh();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Anulowano usunięcie');
    }
  };

  return (
    <div className='flex gap-2'>
      {email === session?.data?.user?.email && (
        <Tippy content='Usuń ogłoszenie'>
          <button
            type='button'
            aria-label='delete ad'
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
            className='card-btn'
          >
            <AiOutlineDelete />
          </button>
        </Tippy>
      )}
      <Tippy
        content={canDelete ? 'Usuń z polubionych' : 'Dodaj do polubionych'}
      >
        {canDelete ? (
          <button
            type='button'
            aria-label='remove from favorites'
            onClick={(e) => {
              e.preventDefault();
              handleRemoveFromFavorites();
            }}
            className='card-btn'
          >
            <FaHeartBroken />
          </button>
        ) : (
          <button
            type='button'
            aria-label='add to favorites'
            onClick={(e) => {
              e.preventDefault();
              handleAddToFavorites();
            }}
            className='card-btn'
          >
            <AiFillHeart />
          </button>
        )}
      </Tippy>
    </div>
  );
};

export default CardButtons;
