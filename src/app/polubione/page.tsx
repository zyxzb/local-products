import { FavoritesAds, PageTitle } from '@/components';
import { notFound } from 'next/navigation';

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/ads`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const Liked = async () => {
  const data = await getData();

  return (
    <div>
      <PageTitle title='Polubione Ogłoszenia' />
      <FavoritesAds ads={data} />
    </div>
  );
};

export default Liked;
