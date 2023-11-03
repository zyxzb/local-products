import { CardsContainer } from '@/components';
import { Listing } from '@prisma/client';

interface NewAdsProps {
  data: Listing[];
}

const NewAds = ({ data }: NewAdsProps) => {
  return (
    <section>
      <p className='mb-4 text-base xl:text-lg'>Ostatnio dodane ogłoszenia</p>
      <CardsContainer data={data} disabledButtons />
    </section>
  );
};

export default NewAds;
