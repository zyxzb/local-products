'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoImg from 'public/landWhite.png';
import { navLinks } from '../data/nav-links';
import { CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const currentRoute = usePathname();

  return (
    <nav className='h-[70px] fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-darkColor px-[15px] md:px-[30px]'>
      <div className='flex items-center gap-5 text-whiteColor'>
        <Link href='/'>WybierzLokalnie.pl</Link>
        <Image
          src={LogoImg}
          alt='logo'
          width={50}
          height={50}
          className='hidden sm:block'
        />
      </div>

      {/* desktop nav */}

      <div className='hidden lg:flex gap-6'>
        {navLinks.map((link) => {
          const { name, url } = link;
          return (
            <Link
              href={url}
              key={name}
              className={`capitalize hover:underline underline-offset-2 text-whiteColor ${
                currentRoute === url && 'underline'
              }`}
            >
              {name}
            </Link>
          );
        })}
      </div>

      {/* mobile nav */}

      <div className='flex lg:hidden'>
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
          <aside className='absolute top-0 left-0 h-[100dvh] w-2/3 sm:w-[300px] bg-darkGreen z-10 p-4 text-whiteColor'>
            {navLinks.map((link) => {
              const { name, url } = link;
              return (
                <div key={name} className='my-6 relative'>
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-[5px] -left-6 bg-darkColor ${
                      currentRoute === url ? 'block' : 'hidden'
                    }`}
                  />
                  <Link href={url} className='uppercase text-whiteColor ml-4'>
                    {name}
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
