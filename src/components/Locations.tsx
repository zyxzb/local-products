'use client';

import { useCallback, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Tippy from '@tippyjs/react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { Listing } from '@prisma/client';
import { useLockedBody } from 'usehooks-ts';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

interface LocationsProps {
  listings: Listing[];
}

const Locations = ({ listings }: LocationsProps) => {
  const [showLocations, setShowLocations] = useState(false);
  const [category, setCategory] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<number[][]>([]);

  useLockedBody(showLocations, 'body');

  const handleClick = useCallback(() => {
    setShowLocations(!showLocations);
  }, [showLocations]);

  const handleSelectCategory = (category: string) => {
    if (category === 'Pozostałe') {
      setCategory('');
      return;
    }
    setCategory(category);
  };

  useEffect(() => {
    const newFilteredLocations = category
      ? listings
          .filter((listing) => listing.categories.includes(category))
          .map((listing) => listing.coord)
      : listings.map((listing) => listing.coord);

    setFilteredLocations(newFilteredLocations);
  }, [category, listings]);

  return (
    <>
      <Tippy content='Otwórz mapę'>
        <button
          onClick={handleClick}
          type='button'
          aria-label='Otwórz mapę'
          className='fixed bottom-6 right-6 text-whiteColor text-3xl p-4 bg-darkColor border-2 border-whiteColor rounded-full md:text-5xl md:bottom-10 md:right-10'
        >
          <FaMapMarkedAlt />
        </button>
      </Tippy>
      {showLocations && (
        <Map
          locations={filteredLocations}
          onClick={handleClick}
          handleSelectCategory={handleSelectCategory}
        />
      )}
    </>
  );
};

export default Locations;
