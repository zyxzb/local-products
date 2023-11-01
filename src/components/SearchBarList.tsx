import Loader from './Loader';

interface SearchBarListProps {
  newSearched: any[];
  isActive: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}

const SearchBarList = ({
  newSearched,
  isActive,
  children,
  isLoading,
}: SearchBarListProps) => {
  const baseClasses = `absolute flex flex-col top-full left-0 right-0 max-h-[40vh] overflow-y-auto bg-darkColor text-whiteColor z-20 scrollbar-thumb-lightGreen scrollbar-track-whiteColor scrollbar-thin border-4 border-darkColor divide-y`;

  let content;

  if (isLoading) {
    content = (
      <div className='min-h-[40px] flex first-letter: items-center p-4 gap-6'>
        <span>Loading...</span>
      </div>
    );
  }

  if (newSearched.length > 0 && isActive) {
    content = children;
  }

  return (
    <div className={`${baseClasses} ${content ? 'visible' : 'hidden'}`}>
      {content}
    </div>
  );
};

export default SearchBarList;
