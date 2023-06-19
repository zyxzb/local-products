import { ButtonProps } from '../types';

const Button = ({ type, text, textStyles }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-darkColor hover:border-whiteColor border-darkColor border-4 text-whiteColor w-max-w px-10 py-[10px] sm:py-[20px] transition  ${textStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
