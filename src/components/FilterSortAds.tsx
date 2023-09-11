// More functionality will be added later

'use client';

import { ImSortNumbericDesc, ImSortNumericAsc } from 'react-icons/im';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const FilterSortAds = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dateIsDesc = searchParams.get('dateDesc');

  const handleSort = () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (dateIsDesc === null) {
      searchParams.set('dateDesc', 'false');
    } else if (dateIsDesc === 'true') {
      searchParams.set('dateDesc', 'false');
    } else {
      searchParams.set('dateDesc', 'true');
    }

    const newPathName = `/ogloszenia?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <div>
      <button
        type='button'
        className='text-sm md:text-base flex items-center gap-4 hover:underline'
        aria-label='sortowanie według daty'
        onClick={handleSort}
      >
        {dateIsDesc === 'false' ? (
          <>
            <ImSortNumericAsc />
            <span>Od najstarszych do najnowszych</span>
          </>
        ) : (
          <>
            <ImSortNumbericDesc />
            <span>Od najnowszych do najstarszych</span>
          </>
        )}
      </button>
    </div>
  );
};

export default FilterSortAds;
