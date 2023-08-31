import { Card, PageTitle } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

const Liked = () => {
  return (
    <>
      <div>
        <PageTitle title='Polubione Ogłoszenia' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* add here liked cards */}
        </div>
      </div>
    </>
  );
};

export default Liked;
