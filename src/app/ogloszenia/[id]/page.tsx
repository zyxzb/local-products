import { Gallery, Breadcrumbs, ButtonsSection } from '@/components';
import { formatFullDate } from '@/utils/helpers';
// import { SingleAdProps } from '@/types';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
// import { Metadata } from 'next';
import dynamic from 'next/dynamic';
// import getAllListings from '@/actions/getAllListings';
import getListingById from '@/actions/getListingById';
import getCurrentUser from '@/actions/getCurrentUser';
// import { Listing, User } from '@prisma/client';

const Map = dynamic(() => import('@/components/LeafletMap'), {
  ssr: false,
});

interface IParams {
  id?: string;
}

// export const generateMetadata = async ({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> => {
//   const id = params.id;
//   const ad = await getListingById(id);

//   return {
//     title: `${ad.title} - ${ad.location}`,
//     description: ad.desc,
//     alternates: {
//       canonical: `/ogloszenia/${id}`,
//     },
//   };
// };

// export const generateStaticParams = async () => {
//   const listings = await getAllListings();
//   return listings.map((listing: any) => ({
//     id: listing.id.toString(),
//   }));
// };

const SingleAd = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();

  // change types later
  const data: any = await getListingById(params);
  const {
    id,
    title,
    content,
    location,
    username,
    createdAt,
    updatedAt,
    images,
    coord,
  } = data;

  return (
    <div>
      <Breadcrumbs pageName='Ogłoszenia' adTitle={title} />
      <ButtonsSection listingId={id} currentUser={currentUser} />
      <div className='flex flex-col lg:grid grid-cols-12 w-full gap-8'>
        {/* LEFT GRID */}

        <div className='col-start-1 col-end-9 flex flex-col gap-8'>
          <Gallery images={images} />
          {/* CONTENT */}
          {/* change mt-8 // space when no photo */}
          <div className='flex flex-col gap-4 bg-white rounded-md p-4'>
            <h1 className='text-xl md:text-3xl'>{title}</h1>
            {/* <h2 className='text-2xl lg:text-3xl'>{desc}</h2> */}
            <p>
              <span className='font-bold'>Opis:</span> {content}
            </p>
          </div>
          {/* END OF CONTENT */}
        </div>
        {/* END OF LEFT GRID */}

        {/* RIGHT GRID */}

        <div className='col-start-9 col-end-13 flex flex-col gap-8'>
          <div className='bg-white rounded-md p-4 '>
            <p className='uppercase font-bold mb-4'>Dodane przez</p>
            <div className='flex items-center gap-2'>
              <BsFillPersonCheckFill className='text-darkColor text-2xl' />
              <p>{username}</p>
            </div>
          </div>

          <div className='bg-white rounded-md p-4 flex flex-col'>
            <p className='uppercase font-bold mb-4'>Lokalizacja</p>
            <div className='flex items-center gap-2 mb-4'>
              <IoLocationSharp className='text-darkColor text-2xl' />
              <p>{location}</p>
              {/* <div>map here</div> */}
            </div>
            {coord.length ? (
              <div className='w-full h-[250px] md:h-[320px]'>
                <Map coord={coord} title={title} />
              </div>
            ) : null}
          </div>
        </div>

        {/* END OF RIGHT GRID */}
      </div>
      <hr className='mt-8 mb-4' />
      {/* ADD FOOTER */}

      <div className='flex justify-between opacity-50 gap-4 flex-wrap'>
        <div className='flex flex-wrap'>
          <span>Utworzono: {formatFullDate(createdAt)},</span>
          {updatedAt !== createdAt && (
            <span> aktualizacja: {formatFullDate(updatedAt)}</span>
          )}
        </div>
        <span>ID: {id}</span>
      </div>

      {/* END OF ADD FOOTER */}
    </div>
  );
};

export default SingleAd;
