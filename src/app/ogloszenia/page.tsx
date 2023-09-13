import { Breadcrumbs, AllAdsServer } from '@/components';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AdsSearchParams } from '@/types';

export const metadata: Metadata = {
  title: 'Wyszukaj producentów żywności - WybierzLokalnie.pl',
  description:
    'Odkryj świeże produkty z Twojego sąsiedztwa! ✔️ Skorzystaj z wyszukiwarki i ciesz się lokalną jakością. ✔️ Dołącz już teraz!',
  alternates: {
    canonical: 'https://www.wybierzlokalnie.pl/ogloszenia',
  },
};

const getData = async (
  page: number,
  limit: number,
  sort: string,
  name: string,
  location: string,
) => {
  const res = await fetch(
    `${
      process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2
    }/api/items/search?page=${page}&limit=${limit}&sort=${sort}&name=${name}&location=${location}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const Ads = async ({ searchParams }: { searchParams: AdsSearchParams }) => {
  const {
    page = 1,
    limit = 20,
    sort = 'dateNewest',
    name = '',
    location = '',
    // from url
  } = searchParams;
  const data = await getData(page, limit, sort, name, location);

  return (
    <>
      <Breadcrumbs pageName='Ogłoszenia' />
      <AllAdsServer data={data} />
      {/* <AllAds /> */}
      {/* add AllAds component for client fetching */}
    </>
  );
};

export default Ads;
