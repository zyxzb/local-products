import getAllListings from '@/actions/getAllListings';
import { Listing } from '@prisma/client';

const sitemap = async () => {
  const baseUrl = 'https://www.wybierzlokalnie.pl';

  const data = await getAllListings();

  const postsUrls = data.listings.map((listing: Listing) => ({
    url: `${baseUrl}/ogloszenia/${listing.id}`,
    lastModified: listing.updatedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date() },
    { url: `${baseUrl}/polubione`, lastModified: new Date() },
    { url: `${baseUrl}/dodaj-producenta`, lastModified: new Date() },
    { url: `${baseUrl}/ogloszania`, lastModified: new Date() },
    ...postsUrls,
  ];
};

export default sitemap;
