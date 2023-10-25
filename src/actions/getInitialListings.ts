import prisma from '@/libs/prismadb';

const getInitialListings = async (numOfListings: number = 8) => {
  const listings = await prisma.listing.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: numOfListings, // Limit the results to the first listings, default 8
  });

  return listings;
};

export default getInitialListings;
