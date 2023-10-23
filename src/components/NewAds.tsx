import getInitialListings from '@/actions/getInitialListings';
import { CardsContainer } from '@/components';

const NewAds = async () => {
  const data = await getInitialListings();

  return (
    <section>
      <p className='mb-4 text-sm md:text-base'>Ostatnio dodane ogłoszenia</p>
      <CardsContainer data={data} />
    </section>
  );
};

export default NewAds;
