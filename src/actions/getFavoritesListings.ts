import prisma from '@/libs/prismadb';
import getCurrentUser from './getCurrentUser';

const getFavoritesListings = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteAds || [])],
        },
      },
    });
    return favorites;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getFavoritesListings;
