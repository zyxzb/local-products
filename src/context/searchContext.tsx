// for client fetching data from search page

// 'use client';

// import React, { useState, useContext } from 'react';
// import useSWR from 'swr';
// import { searchContextProps } from '@/types';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const ITEMS_PER_PAGE = 20;

// export const SearchContext = React.createContext<searchContextProps>({
//   currentPage: 1,
//   setCurrentPage: () => {},
//   dateIsDesc: true,
//   setDateIsDesc: () => {},
//   name: '',
//   setName: () => {},
//   location: '',
//   setLocation: () => {},
//   data: null,
//   error: null,
//   isLoading: false,
//   handlePrevPage: () => {},
//   handleNextPage: () => {},
//   handlePageChange: () => {},
//   handleSort: () => {},
// });

// export const SearchContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dateIsDesc, setDateIsDesc] = useState(true);
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const { data, error, isLoading } = useSWR(
//     `/api/ads/search?page=${currentPage}&limit=${ITEMS_PER_PAGE}&dateDesc=${dateIsDesc}&name=${name}&location=${location}`,
//     fetcher,
//   );

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextPage = async () => {
//     const { totalPages } = await data;
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleSort = () => {
//     setDateIsDesc((prev) => !prev);
//   };

//   return (
//     <SearchContext.Provider
//       value={{
//         currentPage,
//         setCurrentPage,
//         dateIsDesc,
//         setDateIsDesc,
//         name,
//         setName,
//         location,
//         setLocation,
//         data,
//         error,
//         isLoading,
//         handlePrevPage,
//         handleNextPage,
//         handlePageChange,
//         handleSort,
//       }}
//     >
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearch = () => useContext(SearchContext);
