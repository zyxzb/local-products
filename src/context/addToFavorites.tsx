'use client';

import React, { useState, useContext, useEffect } from 'react';
import { addToFavoritesContextProps } from '@/types';

const getLocalStorage = () => {
  let localStorageAds = localStorage.getItem('favorites');
  if (localStorageAds) {
    return JSON.parse(localStorage.getItem('favorites') || '');
  } else {
    return [];
  }
};

export const AddToFavoritesContext =
  React.createContext<addToFavoritesContextProps>({
    favoritesAds: [],
    setFavoritesAds: () => [{}],
  });

export const AddToFavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoritesAds, setFavoritesAds] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoritesAds));
  }, [favoritesAds]);

  return (
    <AddToFavoritesContext.Provider value={{ favoritesAds, setFavoritesAds }}>
      {children}
    </AddToFavoritesContext.Provider>
  );
};

export const useAddToFavorites = () => useContext(AddToFavoritesContext);
