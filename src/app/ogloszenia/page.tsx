import { Breadcrumbs, AllAds } from '@/components';

export const metadata = {
  title: 'Wyszukaj producentów żywności - WybierzLokalnie.pl',
  description:
    'Odkryj świeże produkty z Twojego sąsiedztwa! ✔️ Skorzystaj z wyszukiwarki i ciesz się lokalną jakością. ✔️ Dołącz już teraz!',
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
