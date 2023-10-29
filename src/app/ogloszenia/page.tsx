import {
  Breadcrumbs,
  FilterSortAds,
  Pagination,
  CardsContainer,
} from '@/components';
import { Metadata } from 'next';
import getAllListings, { IListingsParams } from '@/actions/getAllListings';
import getCurrentUser from '@/actions/getCurrentUser';

export const metadata: Metadata = {
  title: 'Wyszukaj producentów żywności - WybierzLokalnie.pl',
  description:
    'Odkryj świeże produkty z Twojego sąsiedztwa! ✔️ Skorzystaj z wyszukiwarki i ciesz się lokalną jakością. ✔️ Dołącz już teraz!',
  alternates: {
    canonical: 'https://www.wybierzlokalnie.pl/ogloszenia',
  },
};

export const dynamic = 'force-dynamic';

interface AdsParams {
  searchParams: IListingsParams;
}

const Ads = async ({ searchParams }: AdsParams) => {
  const currentUser = await getCurrentUser();
  const data = await getAllListings(searchParams);

  return (
    <>
      <Breadcrumbs pageName='Ogłoszenia' />
      {data.length > 0 ? (
        <>
          <FilterSortAds totalCount={data.length} />
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
    </>
  );
};

export default Ads;
