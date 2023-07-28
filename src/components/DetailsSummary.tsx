import { homeData } from '@/data/home-data';
import { HiChevronDown } from 'react-icons/hi';

const DetailsSummary = () => {
  return (
    <div className='grid divide-y divide-darkColor w-full'>
      {homeData.map((data) => (
        <div key={data.header} className='py-5'>
          <details className='group'>
            <summary className='flex justify-between items-center cursor-pointer list-none text-sm md:text-base'>
              <span>{data.header}</span>
              <span className='transition group-open:rotate-180 ml-4'>
                <HiChevronDown className='text-2xl' />
              </span>
            </summary>
            <p className='mt-3 ml-3 group-open:animate-sweep text-sm md:text-base'>
              {data.content}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default DetailsSummary;
