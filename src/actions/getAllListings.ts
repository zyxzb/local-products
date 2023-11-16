import prisma from '@/libs/prismadb';

export interface IListingsParams {
  userId?: string;
  page?: number;
  limit?: number;
  sort?: string;
  title?: string;
  location?: string;
  category?: string;
}

const getAllListings = async (params: IListingsParams = {}) => {
  try {
    const { userId, page, limit, sort, title, location, category } = params;

    let query: any = {};
    let orderBy: any = { createdAt: 'desc' };

    // later add search by user id
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
      const [field, direction] = sort.split('_');
      orderBy = { [field]: direction.toLowerCase() as 'asc' | 'desc' };
    }

    if (title) {
      query.title = {
        contains: title,
        mode: 'insensitive',
      };
    }

    if (location) {
      query.location = {
        contains: location,
        mode: 'insensitive',
      };
    }

    if (category) {
      query.categories = {
        has: category,
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: orderBy,
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getAllListings;
