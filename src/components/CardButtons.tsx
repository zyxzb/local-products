'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useSession } from 'next-auth/react';
import { AiFillHeart, AiOutlineDelete } from 'react-icons/ai';
import { FaHeartBroken } from 'react-icons/fa';
import { CardProps } from '@/types';
import { useAddToFavorites } from '@/context/addToFavoritesContext';
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
  const { handleAddToFavorites, handleRemoveFromFavorites } =
    useAddToFavorites();
  const session = useSession();
  const router = useRouter();

  const handleDelete = async () => {
    const confirm = window.confirm(
      `Czy na pewno chcesz usunąć ogłoszenie: ${title}?`,
    );

    if (confirm) {
      try {
        const res = await fetch(`/api/items/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 200) {
          toast.success(`Usunięto ogłoszenie z id: ${_id}`);
        }
        if (res.status === 500) {
          toast.error(`Błąd serwera `);
        }
        router.refresh();
      } catch (err) {
        toast.error(
          `Bład: ${err}. Wyłącz AdBlocka lub otwórz przeglądarkę w trybie incognito.`,
        );
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
            aria-label='usuń ogłoszenie'
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
            aria-label='usuń z polubionych'
            onClick={(e) => {
              e.preventDefault();
              handleRemoveFromFavorites(item);
            }}
            className='card-btn'
          >
            <FaHeartBroken />
          </button>
        ) : (
          <button
            type='button'
            aria-label='dodaj do polubionych'
            onClick={(e) => {
              e.preventDefault();
              handleAddToFavorites(item);
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
