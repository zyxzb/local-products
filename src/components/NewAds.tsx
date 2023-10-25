import { CardsContainer } from '@/components';
import { Listing } from '@prisma/client';

interface NewAdsProps {
  data: Listing[];
}

export const revalidate = 60;

const NewAds = async ({ data }: NewAdsProps) => {
  return (
    <section>
      <p className='mb-4 text-sm md:text-base'>Ostatnio dodane ogłoszenia</p>
      <CardsContainer data={data} />
    </section>
  );
};

export default NewAds;
