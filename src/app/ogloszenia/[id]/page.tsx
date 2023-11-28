import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { findCategoryName, formatFullDate } from '@/utils/helpers';
import { IoLocationSharp } from 'react-icons/io5';

import { Gallery, Breadcrumbs, ButtonsSection } from '@/components';

import getListingById from '@/actions/getListingById';
import getCurrentUser from '@/actions/getCurrentUser';
import getAllListings from '@/actions/getAllListings';

import { Listing } from '@prisma/client';
import Link from 'next/link';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export const revalidate = 600;

interface SingleAdProps {
  id?: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: SingleAdProps;
}): Promise<Metadata> => {
  const listing = await getListingById(params);

  if (!listing) {
    return notFound();
  }

  return {
    title: `${listing.title} - WybierzLokalnie.pl`,
    description: `${listing.title}, ${listing.location} - WybierzLokalnie.pl - Lokalni producenci żywności`,
    alternates: {
      canonical: `/ogloszenia/${listing.id}`,
    },
    openGraph: {
      title: `${listing.title} - WybierzLokalnie.pl`,
      url: `/ogloszenia/${listing.id}`,
      description: `${listing.title}, ${listing.location} - WybierzLokalnie.pl - Lokalni producenci żywności`,
      type: 'article',
    },
  };
};

export const generateStaticParams = async () => {
  const data = await getAllListings();
  return data.listings.map((listing: Listing) => ({
    id: listing.id.toString(),
  }));
};

const SingleAd = async ({ params }: { params: SingleAdProps }) => {
  const currentUser = await getCurrentUser();

  // change types later
  const data: any = await getListingById(params);
  const {
    id,
    title,
    content,
    location,
    createdAt,
    updatedAt,
    images,
    coord,
    email,
    categories,
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
          <div className='flex flex-col gap-4 bg-white rounded-md p-2.5 md:p-4'>
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
          <div className='bg-white rounded-md p-2.5 md:p-4'>
            <p className='uppercase font-bold mb-4'>Dodane przez</p>
            <div className='flex items-center gap-2'>
              <div>
                <BsFillPersonCheckFill className='text-darkColor' size={24} />
              </div>
              <p>{email?.split('@')[0]}</p>
            </div>
          </div>

          {categories.length > 0 && (
            <div className='bg-white rounded-md p-2.5 md:p-4'>
              <p className='uppercase font-bold mb-4'>Kategoria</p>
              <div className='flex flex-wrap gap-3'>
                {categories.map((category: string) => (
                  <Link
                    href={`/ogloszenia?category=${category}`}
                    aria-label={findCategoryName(category)}
                    className='px-4 py-2 border bg-darkColor text-whiteColor rounded-2xl'
                    key={category}
                  >
                    {findCategoryName(category)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className='bg-white rounded-md p-2.5 md:p-4 flex flex-col'>
            <p className='uppercase font-bold mb-4'>Lokalizacja</p>
            <div className='flex items-center gap-2 mb-4'>
              <div>
                <IoLocationSharp className='text-darkColor' size={24} />
              </div>
              <p>{location}</p>
              {/* <div>map here</div> */}
            </div>
            {coord.length ? (
              <div className='w-full h-[250px] md:h-[320px]'>
                <Map coord={coord} />
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
          <span>Utworzono: {formatFullDate(createdAt)}</span>
          {formatFullDate(createdAt) !== formatFullDate(updatedAt) && (
            <span>, aktualizacja: {formatFullDate(updatedAt)}</span>
          )}
        </div>
        <span>ID: {id}</span>
      </div>

      {/* END OF ADD FOOTER */}
    </div>
  );
};

export default SingleAd;
