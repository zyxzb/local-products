'use client';

import React, { useState, useRef } from 'react';
import { SearchInput } from '@/components';
import { CiLocationOn } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import useSearchBar from '@/hooks/useSearchBar';
import { useOnClickOutside } from 'usehooks-ts';
import { useCreateAdContext } from '@/context/createAddContext';

const initState = {
  location: '',
};

const SelectLocation = () => {
  const [formData, setFormData] = useState(initState);
  const { mergedLocation } = useSearchBar(formData);
  const [isListVisible, setIsListVisible] = useState(false);
  const { setLocation } = useCreateAdContext();

  const myRef = useRef(null);

  const handleClickOutside = () => {
    setIsListVisible(false);
  };

  useOnClickOutside(myRef, handleClickOutside);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setLocation(value);
  };

  return (
    <div className='flex flex-1 relative text-darkColor' ref={myRef}>
      <div className='w-full border-[1px] border-darkColor'>
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
      </div>
      <div
        className='cursor-pointer'
        onClick={() => setFormData({ ...formData, ['location']: '' })}
      >
        <TfiClose className='absolute right-[10px] top-1/2 -translate-y-1/2 text-2xl text-darkColor' />
      </div>
      {mergedLocation.length > 0 && (
        <div
          className={`absolute flex flex-col gap-2 p-4 top-full left-0 right-0 max-h-[250px] overflow-y-auto bg-darkColor text-whiteColor z-20 ${
            formData.location.length > 0 && isListVisible ? 'visible' : 'hidden'
          }`}
        >
          {mergedLocation.map((item) => (
            <div
              key={item.id}
              className='hover:underline cursor-pointer'
              onClick={() => {
                setFormData({ ...formData, ['location']: item.name });
                setLocation(item.name);
                setIsListVisible(false);
              }}
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
  );
};

export default SelectLocation;
