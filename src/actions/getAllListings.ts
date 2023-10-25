import prisma from '@/libs/prismadb';

export interface IListingsParams {
  userId?: string;
  page?: number;
  limit?: number;
  sort?: string;
  name?: string;
  location?: string;
}

const getAllListings = async (params: IListingsParams = {}) => {
  try {
    const { userId, page, limit, sort, name, location } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (page) {
      query.page = page;
    }

    if (limit) {
      query.limit = limit;
    }

    if (sort) {
      query.sort = sort;
    }

    if (name) {
      query.name = name;
    }

    if (location) {
      query.location = location;
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

export default getAllListings;
