import prisma from '@/libs/prismadb';

interface ISearchedListings {
  name: string | null;
  location: string | null;
}

const getSearchedListings = async (params: ISearchedListings) => {
  try {
    const { name, location } = params;

    if (!name && !location) {
      console.log('Both title and location are empty. Skipping fetch.');
      return [];
    }

    let query: any = {};

    if (name) {
      query.title = {
        contains: name,
        mode: 'insensitive',
      };
    }

    if (location) {
      query.location = {
        contains: location,
        mode: 'insensitive',
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getSearchedListings;
