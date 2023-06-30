import { CustomButtonProps } from '@/types';

const CustomButton = ({
  type,
  text,
  extraStyles,
  icon,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={`flex w-max-w px-10 py-[10px] sm:py-[20px] items-center justify-center relative overflow-hidden border-[3px] border-darkColor ease-in-out before:absolute before:content-[''] before:w-[110%] before:aspect-square before:rounded-full bg-darkColor before:bg-whiteColor before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 hover:before:scale-100 text-whiteColor hover:text-darkColor before:transform before:transition duration-300 before:duration-500 ${extraStyles}`}
      onClick={onClick}
    >
      <span className='flex w-max-w z-10 gap-2'>
        {text}
        {icon}
      </span>
    </button>
  );
};

export default CustomButton;
