'use client';

import { useState, useCallback } from 'react';
import { CardsContainer } from '@/components';
import { User, Listing } from '@prisma/client';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface AccountClientProps {
  data: Listing[];
  currentUser: User;
  canDelete?: true;
}

const AccountClient = ({
  data,
  currentUser,
  canDelete,
}: AccountClientProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

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
    <div>
      <CardsContainer
        data={data}
        currentUser={currentUser}
        canDelete={canDelete}
        onAction={onCancel}
      />
    </div>
  );
};

export default AccountClient;
