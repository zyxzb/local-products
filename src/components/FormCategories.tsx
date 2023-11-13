'use client';

import { useCallback } from 'react';
import { useCreateAdContext } from '@/context/createAddContext';
import { categories as allCategories } from '@/data/categories';

const FormCategories = () => {
  const { categories, setCategories } = useCreateAdContext();

  const handleToggleCategory = useCallback(
    (category: string) => {
      setCategories((prevCategories: string[]) => {
        if (prevCategories.includes(category)) {
          return prevCategories.filter((c) => c !== category);
        } else {
          return [...prevCategories, category];
        }
      });
    },
    [setCategories],
  );

  return (
    <div className='flex flex-col gap-4 mb-10'>
      <div className='flex flex-wrap gap-3'>
        {allCategories.map((category) => (
          <button
            type='button'
            aria-label={`Dodaj/usuń ${category.label}`}
            className='px-4 py-2 border border-darkColor rounded-2xl'
            key={category.label}
            onClick={() => handleToggleCategory(category.label)}
          >
            {category.label}
          </button>
        ))}
      </div>
      {categories.length > 0 && (
        <div>
          <p className='mb-4'>Wybrano:</p>
          <div className='flex flex-wrap gap-3'>
            {categories.map((category) => (
              <button
                type='button'
                aria-label={`Dodaj/usuń ${category}`}
                className='px-4 py-2 border bg-darkColor text-whiteColor rounded-2xl'
                key={category}
                onClick={() => handleToggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default FormCategories;
