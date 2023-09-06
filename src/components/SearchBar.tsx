'use client';

import React, { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import Link from 'next/link';
import { CustomButton, SearchInput } from '@/components';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import useSearchBar from '@/hooks/useSearchBar';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/context/searchContext';

const initState = {
  name: '',
  location: '',
};

const SearchBar = () => {
  const [formData, setFormData] = useState(initState);
  const { mergedLocation } = useSearchBar(formData);
  const { setName, setLocation, handlePageChange } = useSearch();
  const [isListVisible, setIsListVisible] = useState(false);
  const myRef = useRef(null);
  const router = useRouter();

  const handleClickOutside = () => {
    setIsListVisible(false);
  };

  useOnClickOutside(myRef, handleClickOutside);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, location } = formData;
    handlePageChange(1);
    if (!name && !location) {
      router.push('/ogloszenia');
      setName('');
      setLocation('');
    } else {
      setName(name);
      setLocation(location);
      router.push('/ogloszenia');
    }
  };

  return (
    <div className='flex items-center justify-center w-full p-[20px] md:py-[40px]  max-w-[1200px] mx-auto'>
      <form
        className='flex flex-col md:flex-row gap-[20px] w-full'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-1 relative text-darkColor'>
          <SearchInput
            name='name'
            placeholder='Produkt lub producent...'
            value={formData.name}
            onChange={handleChange}
            icon={
              <CiSearch className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
            }
          />
        </div>
        <div className='flex flex-1 relative text-darkColor' ref={myRef}>
          <SearchInput
            name='location'
            placeholder='Lokalizacja...'
            value={formData.location}
            onChange={handleChange}
            onFocus={() => setIsListVisible(true)}
            icon={
              <CiLocationOn className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
            }
          />
          <div
            className='cursor-pointer'
            onClick={() => setFormData({ ...formData, ['location']: '' })}
          >
            <TfiClose className='absolute right-[10px] top-1/2 -translate-y-1/2 text-2xl text-darkColor' />
          </div>
          {mergedLocation.length > 0 && (
            <div
              className={`absolute flex flex-col gap-2 p-4 top-full left-0 right-0 max-h-[200px] overflow-y-auto bg-darkColor text-whiteColor z-20 ${
                formData.location.length > 0 && isListVisible
                  ? 'visible'
                  : 'hidden'
              }`}
            >
              {mergedLocation.map((item) => (
                <Link
                  href='#'
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
        <CustomButton
          type='submit'
          text='Szukaj'
          icon={<CiSearch className='text-2xl' />}
        />
      </form>
    </div>
  );
};

export default SearchBar;
