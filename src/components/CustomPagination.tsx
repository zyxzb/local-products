'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Pagination from 'react-js-pagination';

interface Props {
  resPerPage: number;
  filteredItems: number;
}

const CustomPagination = ({ resPerPage, filteredItems }: Props) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  let page = searchParams?.get('page') || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage: any) => {
    if (typeof window !== 'undefined') {
      queryParams = new URLSearchParams(window.location.search);
      if (queryParams.has('page')) {
        queryParams.set('page', currentPage);
      } else {
        queryParams.append('page', currentPage);
      }
      const path = `${window.location.pathname}?${queryParams.toString()}`;
      router.push(path);
    }
  };

  return (
    <div className='flex items-center mt-10 md:mt-20 text-sm md:text-base'>
      <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={filteredItems}
        onChange={handlePageChange}
        prevPageText='<'
        nextPageText='>'
        firstPageText='<<'
        lastPageText='>>'
        itemClass='page-item'
      />
    </div>
  );
};

export default CustomPagination;
