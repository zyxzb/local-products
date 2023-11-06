import getAllListings from '@/actions/getAllListings';
import { Locations } from '@/components';

const LocationsWrapper = async () => {
  const data = await getAllListings();
  const locations = data.map((item) => item.coord);

  return <Locations locations={locations} />;
};

export default LocationsWrapper;
