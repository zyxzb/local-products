import getInitialListings from '@/actions/getInitialListings';
import { CardsContainer } from '@/components';
import { User } from '@prisma/client';

interface NewAdsProps {
  currentUser?: User | null;
}

const NewAds = async ({ currentUser }: NewAdsProps) => {
  const data = await getInitialListings();

  return (
    <section>
      <p className='mb-4 text-sm md:text-base'>Ostatnio dodane ogłoszenia</p>
      <CardsContainer data={data} currentUser={currentUser} />
    </section>
  );
};

export default NewAds;
