import SearchInput from './SearchInput';
import Link from 'next/link';
import SearchButton from './ClearButton';
import { useRef } from 'react';

type SearchInputBoxProps = {
  name: string;
  placeholder: string;
  value: string;
  icon: any;
  onFocus: () => void;
  isVisible: boolean;
  onClear: () => void;
  onLinkClick: (item: any) => void;
  newSearched: any[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchInputBox: React.FC<SearchInputBoxProps> = ({
  name,
  placeholder,
  value,
  icon: ICon,
  onFocus,
  isVisible,
  onClear,
  onLinkClick,
  newSearched,
  handleChange,
}) => {
  const ref = useRef(null);

  return (
    <div className='flex flex-1 relative text-darkColor' ref={ref}>
      <SearchInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        icon={ICon}
      />
      <SearchButton onClick={onClear} />
      {newSearched.length > 0 && (
        <div
          className={`absolute flex flex-col gap-2 p-4 top-full left-0 right-0 max-h-[200px] overflow-y-auto bg-darkColor text-whiteColor z-20 ${
            newSearched.length > 0 && value.length && isVisible
              ? 'visible'
              : 'hidden'
          }`}
        >
          {newSearched.map((item: any) => (
            <Link
              href={`/ogloszenia/${
                name === 'name' ? item.id : `?location=${item.location}`
              }`}
              key={item.id}
              className='hover:underline'
              onClick={() => onLinkClick(item)}
            >
              <div>
                <span className='font-bold'>
                  {name === 'name' ? item.title : item.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInputBox;
