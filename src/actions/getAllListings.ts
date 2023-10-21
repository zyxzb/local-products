const getAllListings = async () => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/items`,
  );
  const listings = await res.json();
  return listings;
};

export default getAllListings;
