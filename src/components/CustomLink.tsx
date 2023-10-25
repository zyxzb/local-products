import Link from 'next/link';

interface CustomLinkProps {
  link: string;
  text: string;
  extraStyles?: string;
  icon?: JSX.Element;
}

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
