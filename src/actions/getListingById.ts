import prisma from '@/libs/prismadb';

interface IParams {
  id?: string;
}

const getListingById = async (params: IParams) => {
  try {
    const { id } = params;

    const listing = await prisma.listing.findUnique({
      where: { id: id },
      include: { user: true },
    });
    if (!listing) {
      return null;
    }
    return listing;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getListingById;
