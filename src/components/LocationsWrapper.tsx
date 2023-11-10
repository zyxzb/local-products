import getAllListings from '@/actions/getAllListings';
import { Locations } from '@/components';

const LocationsWrapper = async () => {
  const data = await getAllListings();
  // const locations = data.map((item) => item.coord);
  // console.log(data);

  return <Locations listings={data} />;
};

export default LocationsWrapper;
