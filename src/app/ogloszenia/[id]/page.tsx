import { PageTitle } from '@/components';
import { notFound } from 'next/navigation';
import { formatFullDate } from '@/utils';

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

const SingleAd = async ({ params: { id } }: { params: { id: string } }) => {
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
  } = data;

  return (
    <div>
      <PageTitle title={title} />
      <h2>{desc}</h2>
      <p>{content}</p>
      <span>Lokalizacja: {location}</span>
      <br />
      <span>dodane przez: {username}</span>
      <br />
      <span>Utworzono: {formatFullDate(createdAt)}</span>
      {updatedAt !== createdAt && (
        <span>, aktualizacja: {formatFullDate(updatedAt)}</span>
      )}
    </div>
  );
};

export default SingleAd;
