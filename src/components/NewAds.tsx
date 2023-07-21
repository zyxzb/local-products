import { CardProps } from '@/types';
import Card from './Card';

const NewAds = ({ data }: { data: CardProps[] }) => {
  return (
    <div className='mb-10'>
      <h2 className='text-xl mb-10'>Ostatnio dodane ogłoszenia</h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'>
        {data.map((item: CardProps) => {
          return <Card key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewAds;
