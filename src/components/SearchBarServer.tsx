'use client';

import getSearchedListings from '@/actions/getSearchedListings';
import SearchBar from './SearchBar';

const SearchBarServer = async () => {
  // const listings = await getSearchedListings();
  const updateListings = async (formData: any) => {
    const listings = await getSearchedListings(formData);
    console.log(listings);
    return listings;
  };
  return <SearchBar updateListings={updateListings} />;
};

export default SearchBarServer;
