'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLockedBody } from 'usehooks-ts';

import { navLinks } from '@/data/nav-links';
import { CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import LogoIcon from 'public/LogoIcon.svg';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const currentRoute = usePathname();

  useLockedBody(openNav, 'body');

  return (
    <nav className='nav-links h-[70px] fixed top-0 left-0 right-0 z-[9999] flex justify-between items-center bg-darkColor px-[15px]'>
      <div>
        <Link href='/' className='flex items-center gap-2 text-whiteColor px-2'>
          <Image
            src={LogoIcon}
            priority={true}
            alt='logo icon'
            className='w-[30px] h-[30px]'
          />
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
        <button type='button' aria-label='otwórz menu'>
          <CiMenuBurger
            className='w-[30px] h-[30px] text-whiteColor'
            onClick={() => setOpenNav(true)}
          />
        </button>
        <aside
          className={`absolute top-0 left-0 h-[100dvh] w-full transition-all bg-darkColor z-10 text-whiteColor px-[15px] ${
            openNav
              ? 'translate-x-0 opacity-100 visible'
              : '-translate-x-full opacity-0 invisible'
          }`}
        >
          <div className='h-[70px] flex justify-between items-center'>
            <div>
              <Link
                href='/'
                className='flex items-center gap-2 text-whiteColor px-2'
                onClick={() => setOpenNav(false)}
              >
                <Image
                  src={LogoIcon}
                  priority={true}
                  alt='logo icon'
                  className='w-[30px] h-[30px]'
                />
                <span>WybierzLokalnie.pl</span>
              </Link>
            </div>
            <TfiClose
              className='w-[30px] h-[30px] text-whiteColor'
              onClick={() => setOpenNav(false)}
            />
          </div>
          <div className='mt-10'>
            {navLinks.map((link) => {
              const { name, url, icon } = link;
              return (
                <div key={name} className='my-6 text-md sm:text-lg px-2'>
                  <Link
                    href={url}
                    className={`uppercase text-whiteColor flex gap-2 items-center underline-offset-2 ${
                      currentRoute === url && 'underline'
                    }`}
                    onClick={() => setOpenNav(false)}
                  >
                    {icon}
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Nav;
