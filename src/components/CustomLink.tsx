import Link from 'next/link';
import { CustomLinkProps } from '@/types';

const CustomLink = ({ link, text, extraStyles, icon }: CustomLinkProps) => {
  return (
    <Link href={link} className={`link-btn ${extraStyles}`}>
      <span className='flex items-center z-10 gap-2'>
        {text}
        {icon}
      </span>
    </Link>
  );
};

export default CustomLink;
