import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

export const navLinks = [
  {
    name: 'strona główna',
    url: '/',
    icon: <AiOutlineHome />,
  },
  {
    name: 'kontakt',
    url: '/kontakt',
    icon: <AiOutlineMail />,
  },
  {
    name: 'polubione',
    url: '/polubione',
    icon: <AiOutlineHeart />,
  },
  {
    name: 'twoje konto',
    url: '/twoje-konto',
    icon: <BsPerson />,
  },
  {
    name: 'dodaj producenta',
    url: '/dodaj-producenta',
    icon: <AiOutlinePlusCircle />,
  },
];
