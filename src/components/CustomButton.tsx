import { CustomButtonProps } from '@/types';

const CustomButton = ({
  type,
  text,
  extraStyles,
  icon,
  onClick,
}: CustomButtonProps) => {
  return (
    <button type={type} className={`link-btn ${extraStyles}`} onClick={onClick}>
      <span className='flex z-10 gap-2'>
        {text}
        {icon}
      </span>
    </button>
  );
};

export default CustomButton;
