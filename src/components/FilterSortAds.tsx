// More functionality will be added later

'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const FilterSortAds = ({ totalCount }: { totalCount: number }) => {
  const searchParams = useSearchParams();
  const [sortValue, setSortValue] = useState(searchParams?.get('sort') || '');
  const router = useRouter();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortValue = e.target.value;
    setSortValue(newSortValue);
    updateSortParam(newSortValue);
  };

  const updateSortParam = (newSortValue: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('sort', newSortValue);
    const newPathName = `/ogloszenia?${searchParams.toString()}`;
    router.push(newPathName);
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
          onChange={handleSortChange}
        >
          <option value='dateNewest'>Data dodania (od najnowszych)</option>
          <option value='dateOldest'>Data dodania (od najstarszych)</option>
          <option value='nameAZ'>Nazwa (A-Z)</option>
          <option value='nameZA'>Nazwa (Z-A)</option>
        </select>
      </form>
    </div>
  );
};

export default FilterSortAds;
