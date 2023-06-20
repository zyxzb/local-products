'use client';

import React, { useState, useRef } from 'react';
import useDebounce from '../hooks/useDebounce';
import Link from 'next/link';
import { useOnClickOutside } from 'usehooks-ts';

import { wojewodztwa } from '../data/wojewodztwa';
import { miasta } from '../data/miasta';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { Button } from '@/app/components';

const initState = {
  name: '',
  location: '',
};

const SearchBar = () => {
  const [formData, setFormData] = useState(initState);
  const [searchedLocation, setSearchedLocation] = useState<any[]>([]);
  const [mergedLocation, setMergedLocation] = useState<any[]>([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const myRef = useRef(null);

  const handleClickOutside = () => {
    setIsListVisible(false);
  };

  useOnClickOutside(myRef, handleClickOutside);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
  };

  // debounce query results
  useDebounce(
    () => {
      const filteredSearch = miasta.filter((miasto) =>
        miasto.name.toLowerCase().includes(formData.location.toLowerCase()),
      );
      // searched locations without merged areas
      setSearchedLocation(filteredSearch);

      if (
        filteredSearch.length !== miasta.length &&
        formData.location.length > 0
      ) {
        const mergedData = filteredSearch.map((miasto) => {
          const wojewodztwo = wojewodztwa.find(
            (woj) => woj.id === miasto.voivodeship_id,
          );
          return {
            ...miasto,
            wojewodztwo: wojewodztwo
              ? wojewodztwo.name
              : 'Nieznane wojewodztwo',
          };
        });
        setMergedLocation(mergedData);
      }
      // searched locations and merged areas
    },
    [formData.location],
    700,
  );

  return (
    <div className='bg-lightGreen flex items-center justify-center w-full p-[20px]'>
      <form className='flex flex-col md:flex-row gap-[20px] w-full'>
        <div className='flex flex-1 relative'>
          <CiSearch className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
          <input
            type='text'
            name='name'
            className='w-full px-[40px] py-[10px] sm:py-[20px] text-lg'
            placeholder='Produkt lub dostawca...'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex flex-1 relative'>
          <CiLocationOn className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
          <input
            type='text'
            name='location'
            className='w-full flex-1 px-[40px] py-[10px] sm:py-[20px] text-lg'
            placeholder='Lokalizacja...'
            value={formData.location}
            onChange={handleChange}
            onFocus={() => setIsListVisible(true)}
          />
          {mergedLocation.length > 0 &&
            miasta.length !== searchedLocation.length &&
            searchedLocation.length !== 0 && (
              <div
                className={`absolute flex flex-col gap-2 p-4 top-full left-0 right-0 max-h-[200px] overflow-y-auto bg-darkColor text-whiteColor ${
                  formData.location.length > 0 && isListVisible
                    ? 'visible'
                    : 'hidden'
                }`}
                ref={myRef}
              >
                {mergedLocation.map((item) => (
                  <Link
                    href={'/'}
                    key={item.id}
                    className='hover:underline'
                    onClick={() => {
                      setFormData({ ...formData, ['location']: item.name });
                      setIsListVisible(false);
                    }}
                  >
                    <div>
                      <span className='font-bold'>{item.name}</span>,{' '}
                      {item.wojewodztwo}
                    </div>
                  </Link>
                ))}
              </div>
            )}
        </div>
        <Button type='button' text='Szukaj...' textStyles='' />
      </form>
    </div>
  );
};

export default SearchBar;
