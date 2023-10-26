'use client';

import React, { useState } from 'react';
import { SearchInput } from '@/components';
import { CiLocationOn } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import useSearchBar from '@/hooks/useMergeLocations';
import { useCreateAdContext } from '@/context/createAddContext';

interface MergedLocationsProps {
  id: number;
  name: string;
  unique_name: string;
  county_id: number;
  voivodeship_id: number;
  latitude: string;
  longitude: string;
  name_locative: string;
  wojewodztwo: string;
}

const initState = {
  location: '',
};

const SelectLocation = () => {
  const [formData, setFormData] = useState(initState);
  const { mergedLocation } = useSearchBar(formData.location);
  const [isListVisible, setIsListVisible] = useState(false);
  const { setLocation, setCoord, location, coord } = useCreateAdContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickLocation = (item: MergedLocationsProps) => {
    const { name, latitude, longitude } = item;
    setFormData({ ...formData, ['location']: name });
    setLocation(name);
    setIsListVisible(false);
    setCoord([+latitude, +longitude]);
  };

  return (
    <>
      <div className='flex flex-1 relative text-darkColor mb-4'>
        <div className='w-full border-[1px] border-darkColor'>
          <SearchInput
            name='location'
            placeholder={location ? location : 'Wybierz lokalizacje z listy'}
            value={formData.location}
            onChange={handleChange}
            onFocus={() => setIsListVisible(true)}
            icon={
              <CiLocationOn className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
            }
          />
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            setFormData({ ...formData, ['location']: '' });
            setLocation('');
          }}
        >
          <TfiClose className='absolute right-[10px] top-1/2 -translate-y-1/2 text-2xl text-darkColor' />
        </div>
        {mergedLocation.length > 0 && (
          <div
            className={`absolute flex flex-col gap-2 p-4 top-full left-0 right-0 max-h-[250px] overflow-y-auto bg-darkColor text-whiteColor z-20 ${
              formData.location.length > 0 && isListVisible
                ? 'visible'
                : 'hidden'
            }`}
          >
            {mergedLocation.map((item) => (
              <div
                key={item.id}
                className='hover:underline cursor-pointer'
                onClick={() => handleClickLocation(item)}
              >
                <div>
                  <span className='font-bold'>{item.name}</span>,{' '}
                  {item.wojewodztwo}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {location && coord ? (
        <span className='text-darkGreen'>Wybrano: {location}</span>
      ) : (
        <span className='text-red-600'>
          Wybierz najbliższą lokalizacje z listy aby wyświetlić mapę w
          ogłoszeniu
        </span>
      )}
    </>
  );
};

export default SelectLocation;
