'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const Pagination = ({ totalPages }: any) => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams?.get('page')) || 1,
  );
  const router = useRouter();

  const handlePrevPage = () => {
    const newPage = Math.max(currentPage - 1, 1);
    updatePageAndURL(newPage);
  };

  const handleNextPage = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    updatePageAndURL(newPage);
  };

  const handlePageChange = (page: number) => {
    updatePageAndURL(page);
  };

  const updatePageAndURL = (newPage: number) => {
    const searchParams = new URLSearchParams(window.location.search);
    setCurrentPage(newPage);
    searchParams.set('page', String(newPage));
    const newPathName = `/ogloszenia?${searchParams.toString()}`;
    router.push(newPathName.toString());
  };

  return (
    <div className='flex justify-center mt-10 md:mt-20 text-sm md:text-base'>
      <button
        className='mr-2 px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <MdOutlineKeyboardArrowLeft className='text-2xl' />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`mx-2 px-4 py-2 border rounded-md ${
            currentPage === index + 1
              ? 'bg-darkColor text-whiteColor'
              : 'bg-gray-300'
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className='ml-2 px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <MdOutlineKeyboardArrowRight className='text-2xl' />
      </button>
    </div>
  );
};

export default Pagination;
