'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Tippy from '@tippyjs/react';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

interface LocationsProps {
  locations: number[][];
}

const Locations = ({ locations }: LocationsProps) => {
  const [showLocations, setShowLocations] = useState(false);

  const handleClick = () => {
    setShowLocations(!showLocations);
  };

  return (
    <>
      <Tippy content='Otwórz mapę'>
        <button
          onClick={handleClick}
          type='button'
          aria-label='Otwórz mapę'
          className='fixed bottom-6 right-6 text-whiteColor text-3xl p-4 bg-darkColor border-2 border-whiteColor rounded-full md:text-5xl md:bottom-10 md:right-10 '
        >
          <FaMapMarkedAlt />
        </button>
      </Tippy>
      {showLocations && <Map locations={locations} onClick={handleClick} />}
    </>
  );
};

export default Locations;
