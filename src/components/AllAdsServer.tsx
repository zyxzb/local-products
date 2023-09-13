import { CardsContainer, FilterSortAds, Pagination } from '@/components';
import { AllAdsServerProps } from '@/types';

const AllAdsServer = ({ data }: { data: AllAdsServerProps }) => {
  const { items, totalCount, totalPages } = data;
  return (
    <div>
      {items.length > 0 ? (
        <>
          <FilterSortAds totalCount={totalCount} />
          <CardsContainer data={items} />
          <Pagination totalPages={totalPages} />
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
