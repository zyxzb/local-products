// 'use client';

// import { CardsContainer, Loader } from '@/components';
// import {
//   MdOutlineKeyboardArrowLeft,
//   MdOutlineKeyboardArrowRight,
// } from 'react-icons/md';
// import { ImSortNumbericDesc, ImSortNumericAsc } from 'react-icons/im';
// import { useSearch } from '@/context/searchContext';

// const AllAds = () => {
//   const {
//     currentPage,
//     dateIsDesc,
//     data,
//     error,
//     isLoading,
//     handlePrevPage,
//     handleNextPage,
//     handlePageChange,
//     handleSort,
//   } = useSearch();

//   if (error) {
//     return <div>{error.message}</div>;
//   }

//   if (isLoading) {
//     return <Loader />;
//   }

//   const { items, totalCount, totalPages } = data;

//   return (
//     <div>
//       {items.length > 0 ? (
//         <>
//           <div className='flex gap-4 items-center justify-between mb-4 flex-wrap'>
//             <div>
//               {items.length > 0 && (
//                 <div>
//                   <p className='text-sm md:text-base'>
//                     Znaleziono {totalCount} ogłoszeń
//                   </p>
//                 </div>
//               )}
//             </div>
//             <div>
//               <button
//                 type='button'
//                 className='text-sm md:text-base flex items-center gap-4 hover:underline'
//                 aria-label='sortowanie według daty'
//                 onClick={handleSort}
//               >
//                 {dateIsDesc ? (
//                   <>
//                     <ImSortNumbericDesc />
//                     <span>Od najnowszych do najstarszych</span>
//                   </>
//                 ) : (
//                   <>
//                     <ImSortNumericAsc />
//                     <span>Od najstarszych do najnowszych</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//           <CardsContainer data={items} />
//           <div className='flex justify-center mt-10 md:mt-20 text-sm md:text-base'>
//             <button
//               className='mr-2 px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//             >
//               <MdOutlineKeyboardArrowLeft className='text-2xl' />
//             </button>
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 className={`mx-2 px-4 py-2 border rounded-md ${
//                   currentPage === index + 1
//                     ? 'bg-darkColor text-whiteColor'
//                     : 'bg-gray-300'
//                 }`}
//                 onClick={() => handlePageChange(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               className='ml-2 px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//             >
//               <MdOutlineKeyboardArrowRight className='text-2xl' />
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className='mt-20 text-center'>
//           <p>
//             Nie znaleziono ogłoszenia zawierajacego wyszukiwaną nazwę
//             produktu/producenta lub miejscowości 😥
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllAds;
