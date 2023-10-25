'use client';

import React, { useState, useContext } from 'react';

interface createAdContextProps {
  location: string;
  images: string[];
  coord: [number, number];
  setLocation: (location: string) => void;
  setImages: (setImages: any) => void;
  setCoord: (setCoord: [number, number]) => void;
}

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
  const [images, setImages] = useState<string[]>([]);
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
