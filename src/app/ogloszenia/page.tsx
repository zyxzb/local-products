import { Breadcrumbs, AllAdsServer } from '@/components';
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
  // const {
  //   page = 1,
  //   limit = 20,
  //   sort = 'dateNewest',
  //   name = '',
  //   location = '',
  //   // from url
  // } = searchParams;
  // const data = await getData(page, limit, sort, name, location);

  return (
    <>
      <Breadcrumbs pageName='Ogłoszenia' />
      <AllAdsServer data={data} currentUser={currentUser} />
      {/* <AllAds /> */}
      {/* add AllAds component for client fetching */}
    </>
  );
};

export default Ads;
