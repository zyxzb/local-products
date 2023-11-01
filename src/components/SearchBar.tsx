'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { useOnClickOutside } from 'usehooks-ts';
import axios from 'axios';

import {
  CustomButton,
  SearchInput,
  ClearButton,
  LazyImage,
  SearchBarList,
} from '@/components';

import useDebounce from '@/hooks/useDebounce';
import useHandleSearch from '@/hooks/useHandleSearch';
import { Listing } from '@prisma/client';

const initFormState = {
  name: '',
  location: '',
};

const initDebouncedInputState = {
  name: '',
  value: '',
};

const SearchBar = () => {
  const [formData, setFormData] = useState(initFormState);
  const [isNameListVisible, setIsNameListVisible] = useState(false);
  const [isLocationListVisible, setIsLocationListVisible] = useState(false);
  const [nameLoading, setNameLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [nameSearched, setNameSearched] = useState([]);
  const [locationSearched, setLocationSearched] = useState([]);
  const [debouncedInput, setDebouncedInput] = useState(initDebouncedInputState);

  const { handleSearch } = useHandleSearch(formData);

  const nameRef = useRef(null);
  const locationRef = useRef(null);

  const handleClickOutsideName = () => {
    setIsNameListVisible(false);
  };

  const handleClickOutsideLocation = () => {
    setIsLocationListVisible(false);
  };

  useOnClickOutside(nameRef, handleClickOutsideName);
  useOnClickOutside(locationRef, handleClickOutsideLocation);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') setNameLoading(true);
    if (name === 'location') setLocationLoading(true);

    setFormData({ ...formData, [name]: value });
    setDebouncedInput({ name, value });
  };

  useDebounce(
    () => {
      if (debouncedInput) {
        const fetchData = async () => {
          try {
            const response = await axios(
              `/api/listings/searched?${debouncedInput.name}=${debouncedInput.value}`,
            );
            const listings = response.data;
            if (debouncedInput.name === 'name') {
              setNameSearched(listings);
            } else if (debouncedInput.name === 'location') {
              setLocationSearched(listings);
            }
          } catch (error) {
            console.error('Error fetching listings:', error);
          } finally {
            setNameLoading(false);
            setLocationLoading(false);
          }
        };
        fetchData();
      }
    },
    [debouncedInput],
    500,
  );

  return (
    <div className='flex items-center justify-center w-full p-[20px] md:py-[40px] max-w-[1200px] mx-auto'>
      <form
        className='flex flex-col md:flex-row gap-[20px] w-full'
        autoComplete='off'
        onSubmit={handleSearch}
      >
        <div className='flex flex-1 relative text-darkColor' ref={nameRef}>
          <SearchInput
            name='name'
            placeholder='Nazwa...'
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setIsNameListVisible(true)}
            icon={
              <CiSearch className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
            }
          />
          <ClearButton
            onClick={() => {
              setFormData({ ...formData, ['name']: '' });
              setNameSearched([]);
            }}
          />
          <SearchBarList
            newSearched={nameSearched}
            isActive={isNameListVisible}
            isLoading={nameLoading}
          >
            {nameSearched.map((item: Listing) => (
              <Link
                href={`/ogloszenia/${item.id}`}
                key={item.id}
                className='hover:underline bg-darkColor hover:bg-whiteColor/70 hover:text-darkColor transition p-2 cursor-pointer'
                onClick={() => {
                  setFormData({ ...formData, ['name']: item.title });
                  setIsNameListVisible(false);
                }}
              >
                <div className='flex items-center gap-6'>
                  <div className='relative min-w-[40px] min-h-[40px] rounded overflow-hidden'>
                    <LazyImage
                      cardImage={item.images[0] || '/landWhite.png'}
                      title={item.title}
                      classNames='object-cover w-full h-full'
                    />
                  </div>
                  <span>{item.title}</span>
                </div>
              </Link>
            ))}
          </SearchBarList>
        </div>
        <div className='flex flex-1 relative text-darkColor' ref={locationRef}>
          <SearchInput
            name='location'
            placeholder='Lokalizacja...'
            value={formData.location}
            onChange={handleChange}
            onFocus={() => setIsLocationListVisible(true)}
            icon={
              <CiLocationOn className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
            }
          />
          <ClearButton
            onClick={() => {
              setFormData({ ...formData, ['location']: '' });
              setLocationSearched([]);
            }}
          />
          <SearchBarList
            newSearched={locationSearched}
            isActive={isLocationListVisible}
            isLoading={locationLoading}
          >
            {locationSearched.map((item: any) => (
              <div
                key={item.id}
                className='hover:underline bg-darkColor hover:bg-whiteColor/70 hover:text-darkColor transition p-2 cursor-pointer'
                onClick={() => {
                  setFormData({ ...formData, ['location']: item?.location });
                  setIsLocationListVisible(false);
                }}
              >
                <div className='min-h-[40px] flex items-center'>
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </SearchBarList>
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
