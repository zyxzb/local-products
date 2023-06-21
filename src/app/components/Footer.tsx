import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='h-[70px] flex justify-center items-center text-center px-10 bg-darkColor text-whiteColor'>
      <p>
        &#169; {new Date().getFullYear()}{' '}
        <Link href='/'>WybierzLokalnie.pl</Link> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
