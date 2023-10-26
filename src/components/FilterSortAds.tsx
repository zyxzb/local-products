// More functionality will be added later

'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import qs from 'query-string';

const FilterSortAds = ({ totalCount }: { totalCount: number }) => {
  const params = useSearchParams();
  const [sortValue, setSortValue] = useState(params?.get('sort') || '');
  const router = useRouter();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortValue(sortValue);
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      sort: sortValue,
    };

    const url = qs.stringifyUrl(
      {
        url: '/ogloszenia',
        query: updatedQuery,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className='text-sm md:text-base mb-10 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-4'>
      <p>
        Znaleziono <span className='font-semibold'>{totalCount} ogłoszeń</span>
      </p>
      <hr className='bg-darkColor border-0 h-px' />
      <form>
        <label htmlFor='sort'>Sortuj według: </label>
        <select
          name='sort'
          id='sort'
          className='bg-transparent'
          value={sortValue}
          onChange={handleSort}
        >
          <option value='createdAt_DESC'>Data dodania (od najnowszych)</option>
          <option value='createdAt_ASC'>Data dodania (od najstarszych)</option>
          <option value='title_ASC'>Nazwa (A-Z)</option>
          <option value='title_DESC'>Nazwa (Z-A)</option>
        </select>
      </form>
    </div>
  );
};

export default FilterSortAds;
