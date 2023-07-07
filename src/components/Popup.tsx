import CustomButton from './CustomButton';
import { PopupProps } from '@/types';

const Popup = ({ text1, text2, onClick }: PopupProps) => {
  return (
    <div className='fixed inset-0 bg-darkColor/30 backdrop-blur-sm z-50'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-[600px] h-[300px] bg-whiteColor text-center grid place-items-center p-10'>
        <button
          type='button'
          className='absolute -top-[25px] -right-[25px] w-[50px] h-[50px] rounded-full bg-lightGreen'
          onClick={onClick}
        >
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-darkColor text-lg'>
            X
          </span>
        </button>
        <div className='flex flex-col gap-10'>
          <p className='text-lg'>
            {text1} <br /> {text2}
          </p>
          <CustomButton type='button' text='Zamknij' onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
