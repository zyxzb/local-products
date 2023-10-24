import { CardsContainer, FilterSortAds, Pagination } from '@/components';
// import { AllAdsServerProps } from '@/types';
import { User } from '@prisma/client';

interface AllAdsServerProps {
  data: any;
  currentUser?: User | null;
}

const AllAdsServer = ({ data, currentUser }: AllAdsServerProps) => {
  // const { items, totalCount, totalPages } = data;
  return (
    <div>
      {data.length > 0 ? (
        <>
          <FilterSortAds
            // change this later
            totalCount={data.length}
          />
          <CardsContainer data={data} currentUser={currentUser} />
          <Pagination
            // change this later
            totalPages
          />
        </>
      ) : (
        <div className='mt-20 text-center'>
          <p>
            Nie znaleziono ogłoszenia zawierajacego wyszukiwaną nazwę
            produktu/producenta lub miejscowości 😥
          </p>
        </div>
      )}
    </div>
  );
};

export default AllAdsServer;
