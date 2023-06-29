import { ButtonProps } from '@/types';

const Button = ({ type, text, extraStyles, icon, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 bg-darkColor hover:border-whiteColor border-darkColor border-4 text-whiteColor w-max-w px-10 py-[10px] sm:py-[20px] transition ${extraStyles}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
