'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { AiFillHeart, AiOutlineDelete } from 'react-icons/ai';
import { FaHeartBroken } from 'react-icons/fa';
import useFavorite from '@/hooks/useFavotite';
import { User } from '@prisma/client';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface CardButtonsProps {
  listingId: string;
  title: string;
  canDelete?: true;
  currentUser?: User | null;
}

const CardButtons = ({
  listingId,
  title,
  canDelete,
  currentUser,
}: CardButtonsProps) => {
  // add later loader for deleting
  const [deletingId, setDeletingId] = useState('');
  const { hasFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  const router = useRouter();

  const handleDelete = () => {
    const confirm = window.confirm(
      `Czy na pewno chcesz usunąć ogłoszenie: ${title}?`,
    );
    if (confirm) {
      onCancel(listingId);
    }
  };

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Ogłoszenie zostało usunięte');
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router],
  );

  return (
    <div className='flex gap-2'>
      {canDelete && (
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
        content={hasFavorite ? 'Usuń z polubionych' : 'Dodaj do polubionych'}
      >
        {hasFavorite ? (
          <button
            type='button'
            aria-label='usuń z polubionych'
            onClick={toggleFavorite}
            className='card-btn'
          >
            <FaHeartBroken />
          </button>
        ) : (
          <button
            type='button'
            aria-label='dodaj do polubionych'
            onClick={toggleFavorite}
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
