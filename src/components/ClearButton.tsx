import { TfiClose } from 'react-icons/tfi';

interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton = ({ onClick }: ClearButtonProps) => {
  return (
    <button
      type='button'
      aria-label='usuń tekst'
      className='absolute right-[10px] top-1/2 -translate-y-1/2 text-2xl text-darkColor/60 p-2'
      onClick={() => onClick()}
    >
      <TfiClose />
    </button>
  );
};

export default ClearButton;
