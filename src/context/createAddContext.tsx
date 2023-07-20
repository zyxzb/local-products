'use client';

import React, { useState, useContext } from 'react';
import { createAdContextProps } from '@/types';

export const CreateAdContext = React.createContext<createAdContextProps>({
  location: '',
  images: [],
  setLocation: () => {},
  setImages: () => {},
});

export const CreateAdContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState('');

  return (
    <CreateAdContext.Provider
      value={{ images, setImages, location, setLocation }}
    >
      {children}
    </CreateAdContext.Provider>
  );
};

export const useCreateAdContext = () => useContext(CreateAdContext);
