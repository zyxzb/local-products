const SkeletonCard = () => {
  return (
    <div className='bg-white rounded-md transition cursor-pointer h-[280px] sm:h-[360px] flex flex-col gap-4 p-3 group shadow hover:shadow-label'>
      <div className='relative w-full h-[65%] bg-gray-200 animate-pulse rounded-md' />
      <div className='flex flex-col justify-between h-[35%]'>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-2 bg-gray-200 animate-pulse h-7 rounded-md' />
        </div>
        <div className='flex justify-between gap-4 items-center mt-auto'>
          <div className='text-xs flex w-2/3 flex-col gap-2'>
            <span className='bg-gray-200 animate-pulse h-2 rounded-md' />
            <span className='bg-gray-200 animate-pulse h-2 rounded-md' />
          </div>
          <div className='bg-gray-200 animate-pulse w-8 h-8 rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
