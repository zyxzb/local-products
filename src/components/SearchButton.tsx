import { TfiClose } from 'react-icons/tfi';
import { SearchButtonProps } from '@/types';

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button
      type='button'
      className='absolute right-[10px] top-1/2 -translate-y-1/2 text-2xl text-darkColor/60 p-2'
      onClick={onClick}
    >
      <TfiClose />
    </button>
  );
};

export default SearchButton;
