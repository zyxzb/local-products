import getAllListings from '@/actions/getAllListings';
import { Locations } from '@/components';

const LocationsWrapper = async () => {
  const data = await getAllListings();

  return <Locations listings={data.listings} />;
};

export default LocationsWrapper;
