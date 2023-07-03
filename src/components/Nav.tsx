'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/data/nav-links';
import { CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import { FiMapPin } from 'react-icons/fi';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const currentRoute = usePathname();

  return (
    <nav className='nav-links h-[70px] fixed top-0 left-0 right-0 z-30 flex justify-between items-center bg-darkColor px-[15px]'>
      <div>
        <Link href='/' className='flex items-center gap-2 text-whiteColor px-2'>
          <FiMapPin className='text-4xl' />
          <span>WybierzLokalnie.pl</span>
        </Link>
      </div>

      {/* desktop nav */}

      <div className='hidden lg:flex h-full items-center'>
        {navLinks.map((link) => {
          const { name, url, icon } = link;
          return (
            <Link
              href={url}
              key={name}
              className={`capitalize hover:underline underline-offset-2 text-whiteColor px-4 h-full flex items-center gap-2 ${
                currentRoute === url &&
                'bg-whiteColor !text-darkColor font-bold'
              }`}
            >
              {icon}
              {name}
            </Link>
          );
        })}
      </div>

      {/* mobile nav */}

      <div className='flex lg:hidden z-30'>
        <button type='button'>
          {openNav ? (
            <TfiClose
              className='w-[30px] h-[30px] text-whiteColor'
              onClick={() => setOpenNav(false)}
            />
          ) : (
            <CiMenuBurger
              className='w-[30px] h-[30px] text-whiteColor'
              onClick={() => setOpenNav(true)}
            />
          )}
        </button>
        {openNav && (
          <aside className='absolute top-0 left-0 h-[100dvh] w-2/3 sm:w-[300px] bg-darkGreen z-10 p-4 text-whiteColor text-sm sm:text-lg'>
            {navLinks.map((link) => {
              const { name, url, icon } = link;
              return (
                <div key={name} className='my-6 relative'>
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-[5px] -left-6 bg-darkColor ${
                      currentRoute === url ? 'block' : 'hidden'
                    }`}
                  />
                  <Link
                    href={url}
                    className='uppercase text-whiteColor ml-4 flex gap-2 items-center'
                  >
                    {name}
                    {icon}
                  </Link>
                </div>
              );
            })}
          </aside>
        )}
      </div>
    </nav>
  );
};

export default Nav;
