import { PageTitle, Gallery, LeafletMap } from '@/components';
import { notFound } from 'next/navigation';
import { formatFullDate } from '@/utils/helpers';
import { SingleAdProps } from '@/types';

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<{ title: string; description: string }> => {
  const ad = await getData(id);

  return {
    title: `${ad.title} - ${ad.location}`,
    description: ad.desc,
  };
};

const getData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/ads/${id}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    return notFound();
  }
  const data = res.json();
  return data;
};

const SingleAd = async ({ params: { id } }: SingleAdProps) => {
  const data = await getData(id);
  const {
    _id,
    title,
    desc,
    location,
    content,
    username,
    createdAt,
    updatedAt,
    images,
    coord,
  } = data;

  return (
    <div>
      <PageTitle title={title} />
      {/* add grid layout later  */}
      <Gallery images={images} />
      {coord.length ? <LeafletMap coord={coord} title={title} /> : null}
      <div className='mt-8 flex flex-col gap-4'>
        <h2 className='text-2xl lg:text-3xl'>{desc}</h2>
        <p>
          <span className='font-bold'>Opis:</span> {content}
        </p>
        <p>
          <span>Lokalizacja:</span> {location}
        </p>
        <p>
          <span>Dodane przez:</span> {username}
        </p>
      </div>
      <hr className='mt-8 mb-4' />
      <div className='opacity-50 flex justify-between flex-wrap gap-4 '>
        <span>Utworzono: {formatFullDate(createdAt)}</span>
        {updatedAt !== createdAt && (
          <span>, aktualizacja: {formatFullDate(updatedAt)}</span>
        )}
        <span>ID: {_id}</span>
      </div>
    </div>
  );
};

export default SingleAd;
