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
    const {
      userId,
      page = 1,
      limit = 12,
      sort,
      title,
      location,
      category,
    } = params;

    let query: any = {};
    let orderBy: any = { createdAt: 'desc' };

    // later add search by user id
    if (userId) {
      query.userId = userId;
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

    // Calculate the number of listings to skip (offset)
    const skip = (page - 1) * limit;

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: orderBy,
      take: limit, // Number of listings to take (limit)
      skip: skip, // Number of listings to skip (offset)
    });

    // Get the total count of listings for pagination
    const total = await prisma.listing.count({ where: query });

    return { listings, total, limit };
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getAllListings;
