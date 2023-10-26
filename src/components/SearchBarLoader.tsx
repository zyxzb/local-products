import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';

const SearchBarLoader = () => {
  return (
    <div className='flex items-center justify-center w-full p-[20px] md:py-[40px] max-w-[1200px] mx-auto'>
      <form className='flex flex-col md:flex-row gap-[20px] w-full'>
        <div className='flex flex-1 relative text-darkColor'>
          <CiSearch className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
          <input
            type='text'
            disabled
            className='w-full px-[40px] py-[10px] sm:py-[20px] text-lg placeholder-darkColor/60 bg-whiteColor'
            placeholder='Loading...'
          />
          <button
            type='button'
            disabled
            aria-label='usuń tekst'
            className='absolute right-[10px] top-1/2 -translate-y-1/2 text-2xl text-darkColor/60 p-2'
          >
            <TfiClose />
          </button>
          {/* <span className='bg-gray-200 animate-pulse h-full'></span> */}
        </div>

        <div className='flex flex-1 relative text-darkColor'>
          <CiLocationOn className='absolute left-[10px] top-1/2 -translate-y-1/2 text-2xl' />
          <input
            type='text'
            disabled
            className='w-full px-[40px] py-[10px] sm:py-[20px] text-lg placeholder-darkColor/60 bg-whiteColor'
            placeholder='Loading...'
          />
          <button
            type='button'
            disabled
            aria-label='usuń tekst'
            className='absolute right-[10px] top-1/2 -translate-y-1/2 text-2xl text-darkColor/60 p-2'
          >
            <TfiClose />
          </button>
          {/* <span className='bg-gray-200 animate-pulse h-full'></span> */}
        </div>

        <button className='link-btn' type='submit' disabled>
          <span className='flex items-center z-10 gap-2'>
            Szukaj <CiSearch className='text-2xl' />
          </span>
          {/* <span className='bg-gray-200 animate-pulse h-full'></span> */}
        </button>
      </form>
    </div>
  );
};

export default SearchBarLoader;
