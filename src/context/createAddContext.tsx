'use client';

import React, { useState, useContext } from 'react';

interface createAdContextProps {
  location: string;
  images: string[];
  coord: [number, number];
  categories: string[];
  setLocation: (location: string) => void;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setCoord: (coord: [number, number]) => void;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CreateAdContext = React.createContext<createAdContextProps>({
  location: '',
  images: [],
  coord: [52.229, 21.012],
  categories: [],
  setLocation: () => {},
  setImages: () => {},
  setCoord: () => {},
  setCategories: () => {},
});

export const CreateAdContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [coord, setCoord] = useState<[number, number]>([52.229, 21.012]);
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <CreateAdContext.Provider
      value={{
        images,
        setImages,
        location,
        setLocation,
        coord,
        setCoord,
        categories,
        setCategories,
      }}
    >
      {children}
    </CreateAdContext.Provider>
  );
};

export const useCreateAdContext = () => useContext(CreateAdContext);
