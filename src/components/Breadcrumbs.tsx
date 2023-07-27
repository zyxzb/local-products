'use client';

import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { BreadcrumbsProps } from '@/types';

const Breadcrumbs = ({ pageName, adTitle }: BreadcrumbsProps) => {
  return (
    <section className='w-full text-darkColor text-lg flex items-center mb-20'>
      <h3 className='flex items-center flex-wrap'>
        <Link href='/' className='flex items-center underline'>
          <AiOutlineHome className='mr-2 text-2xl' /> Strona główna
        </Link>
        {pageName && !adTitle && (
          <>
            <span className='px-1'>/</span>
            {pageName}
          </>
        )}
        {pageName && adTitle && (
          <>
            <span className='px-1'>/</span>
            <Link href='/ogloszenia' className='flex items-center underline'>
              {pageName}
            </Link>
            <span className='px-1'>/</span>
            {adTitle}
          </>
        )}
      </h3>
    </section>
  );
};

export default Breadcrumbs;
