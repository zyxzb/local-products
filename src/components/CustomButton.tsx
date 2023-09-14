import { CustomButtonProps } from '@/types';

const CustomButton = ({
  type,
  text,
  extraStyles,
  icon,
  reverse,
  isLight,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={`${isLight ? 'light-link-btn' : 'link-btn'} ${extraStyles}`}
      onClick={onClick}
    >
      <span
        className={`flex items-center z-10 gap-2 ${
          reverse && 'flex-row-reverse'
        }`}
      >
        {text}
        {icon}
      </span>
    </button>
  );
};

export default CustomButton;
