import { SearchInputProps } from '../types';

const SearchInput = ({
  name,
  placeholder,
  value,
  onChange,
  required,
  onFocus,
  icon,
}: SearchInputProps) => {
  return (
    <>
      {icon}
      <input
        type='text'
        name={name}
        className='w-full px-[40px] py-[10px] sm:py-[20px] text-lg placeholder-darkColor/60 bg-whiteColor'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={onFocus}
      />
    </>
  );
};

export default SearchInput;
