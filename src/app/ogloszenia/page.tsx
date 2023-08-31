import { Breadcrumbs, AllAds } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wyszukaj producentów żywności - WybierzLokalnie.pl',
  description:
    'Odkryj świeże produkty z Twojego sąsiedztwa! ✔️ Skorzystaj z wyszukiwarki i ciesz się lokalną jakością. ✔️ Dołącz już teraz!',
  alternates: {
    canonical: 'https://www.wybierzlokalnie.pl/ogloszenia',
  },
};

const Ads = () => {
  return (
    <>
      <Breadcrumbs pageName='Ogłoszenia' />
      <AllAds />
    </>
  );
};

export default Ads;
