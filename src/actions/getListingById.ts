import { notFound } from 'next/navigation';

const getListingById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/items/${id}`,
  );
  if (!res.ok) {
    return notFound();
  }
  const listing = await res.json();
  return listing;
};

export default getListingById;
