interface SearchInputProps {
  name: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  icon?: JSX.Element;
}

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
        className='w-full pl-[40px] pr-[55px] py-[10px] sm:py-[20px] text-lg placeholder-darkColor/60 bg-whiteColor'
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
