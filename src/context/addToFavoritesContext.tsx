'use client';

import React, { useState, useContext, useEffect } from 'react';
import { CardProps, addToFavoritesContextProps } from '@/types';
import { toast } from 'react-toastify';

const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let localStorageAds = localStorage.getItem('favorites');
    if (localStorageAds) {
      return JSON.parse(localStorage.getItem('favorites') || '');
    } else {
      return [];
    }
  }
};

export const AddToFavoritesContext =
  React.createContext<addToFavoritesContextProps>({
    favoritesAds: [],
    setFavoritesAds: () => [{}],
    handleAddToFavorites: () => {},
    handleRemoveFromFavorites: () => {},
  });

export const AddToFavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoritesAds, setFavoritesAds] = useState(getLocalStorage());

  const handleAddToFavorites = (ad: CardProps) => {
    const { title, _id } = ad;
    const tempFavoriteAd = favoritesAds.filter(
      (ad: CardProps) => ad._id === _id,
    );
    if (tempFavoriteAd.length > 0) {
      toast.info(`${title} juz istnieje w polubionych`);
    } else {
      setFavoritesAds([...favoritesAds, ad]);
      toast.success(`Dodano: ${title} do polubionych`);
    }
  };

  const handleRemoveFromFavorites = (ad: CardProps) => {
    const { title, _id } = ad;
    const tempFavoritesCard = favoritesAds.filter(
      (ad: CardProps) => ad._id !== _id,
    );
    setFavoritesAds([...tempFavoritesCard]);
    toast.info(`${title} usunięto z polubionych`);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoritesAds));
  }, [favoritesAds]);

  return (
    <AddToFavoritesContext.Provider
      value={{
        favoritesAds,
        setFavoritesAds,
        handleAddToFavorites,
        handleRemoveFromFavorites,
      }}
    >
      {children}
    </AddToFavoritesContext.Provider>
  );
};

export const useAddToFavorites = () => useContext(AddToFavoritesContext);
