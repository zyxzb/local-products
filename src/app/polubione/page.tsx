import { Card, PageTitle, PageWrapper } from '@/components';

const Liked = () => {
  return (
    <PageWrapper>
      <div>
        <PageTitle title='Polubione Ogłoszenia' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Liked;
