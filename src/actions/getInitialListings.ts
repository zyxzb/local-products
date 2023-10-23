import prisma from '@/libs/prismadb';

const getInitialListings = async (numOfListings: number = 6) => {
  const listings = await prisma.listing.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: numOfListings, // Limit the results to the first listings, default 6
  });

  return listings;
};

export default getInitialListings;
