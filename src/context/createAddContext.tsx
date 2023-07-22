'use client';

import React, { useState, useContext } from 'react';
import { createAdContextProps } from '@/types';

export const CreateAdContext = React.createContext<createAdContextProps>({
  location: '',
  images: [],
  coord: [52.229, 21.012],
  setLocation: () => {},
  setImages: () => {},
  setCoord: () => {},
});

export const CreateAdContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState('');
  const [coord, setCoord] = useState<[number, number]>([52.229, 21.012]);

  return (
    <CreateAdContext.Provider
      value={{ images, setImages, location, setLocation, coord, setCoord }}
    >
      {children}
    </CreateAdContext.Provider>
  );
};

export const useCreateAdContext = () => useContext(CreateAdContext);
