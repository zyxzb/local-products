const sitemap = async () => {
  const baseUrl = 'https://www.wybierzlokalnie.pl';

  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/ads/`,
  );
  const ads = await res.json();
  const postsUrls = ads.map((ad: any) => ({
    url: `${baseUrl}/ogloszenia/${ad._id}`,
    lastModified: ad.updatedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date() },
    { url: `${baseUrl}/ogloszania`, lastModified: new Date() },
    ...postsUrls,
  ];
};

export default sitemap;
