import Link from 'next/link';
import { CustomLinkprops } from '@/types';

const CustomLink = ({ link, text, extraStyles, icon }: CustomLinkprops) => {
  return (
    <Link href={link} className={`link-btn ${extraStyles}`}>
      <span className='flex z-10 gap-2'>
        {text}
        {icon}
      </span>
    </Link>
  );
};

export default CustomLink;
