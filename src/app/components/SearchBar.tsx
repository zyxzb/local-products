'use client';

import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Link from 'next/link';

import { wojewodztwa } from '../data/wojewodztwa';
import { miasta } from '../data/miasta';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { Button } from '@/app/components';
import { MiastaProps, WojewodztwaProps } from '../types';

const initState = {
  name: '',
  location: '',
};

const SearchBar = () => {
  const [formData, setFormData] = useState(initState);
  const [searchedLocation, setSearchedLocation] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // debounce query results
  useDebounce(
    () => {
      const formLocation = formData.location;
      const filteredSearch = miasta.filter((location) =>
        location.name.toLowerCase().includes(formLocation.toLowerCase()),
      );
      console.log(filteredSearch);
      setSearchedLocation(filteredSearch);
    },
    [formData.location],
    500,
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
          />
          {searchedLocation.length > 0 &&
            miasta.length !== searchedLocation.length && (
              <div className='absolute flex flex-col gap-2 p-4 top-full left-0 right-0 z-10  max-h-[200px] overflow-y-auto bg-darkColor text-whiteColor'>
                {searchedLocation.map((item) => (
                  <Link href={'/'} key={item.id}>
                    <div>{item.name}</div>
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
