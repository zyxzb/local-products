import {
  PageTitle,
  Gallery,
  // LeafletMap
} from '@/components';
import { notFound } from 'next/navigation';
import { formatFullDate } from '@/utils/helpers';
import { SingleAdProps } from '@/types';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<{ title: string; description: string }> => {
  const ad = await getData(id);

  return {
    title: `${ad.title} - ${ad.location}`,
    description: ad.desc,
  };
};

const getData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL2}/api/ads/${id}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    return notFound();
  }
  const data = res.json();
  return data;
};

const SingleAd = async ({ params: { id } }: SingleAdProps) => {
  const data = await getData(id);
  const {
    _id,
    title,
    // desc,
    location,
    content,
    username,
    createdAt,
    updatedAt,
    images,
    coord,
  } = data;

  return (
    <div>
      <div className='flex flex-col lg:grid grid-cols-12 w-full gap-8'>
        {/* LEFT GRID */}

        <div className='col-start-1 col-end-9 flex flex-col'>
          <Gallery images={images} />
          {/* CONTENT */}
          <div className='mt-8 flex flex-col gap-4 bg-white rounded-md p-4'>
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
            <div className='flex items-center gap-4'>
              <BsFillPersonCheckFill className='text-darkColor text-2xl' />
              <p>{username}</p>
            </div>
          </div>

          <div className='bg-white rounded-md p-4 '>
            <p className='uppercase font-bold mb-4'>Lokalizacja</p>
            <div className='flex items-center gap-4'>
              <IoLocationSharp className='text-darkColor text-2xl' />
              <p>{location}</p>
              {/* <div>map here</div> */}
            </div>
          </div>
        </div>

        {/* END OF RIGHT GRID */}

        {/* {coord.length ? <LeafletMap coord={coord} title={title} /> : null} */}
      </div>
      <hr className='mt-8 mb-4' />
      {/* ADD FOOTER */}

      <div className='opacity-50 flex justify-between flex-wrap gap-4 '>
        <span>Utworzono: {formatFullDate(createdAt)}</span>
        {updatedAt !== createdAt && (
          <span>, aktualizacja: {formatFullDate(updatedAt)}</span>
        )}
        <span>ID: {_id}</span>
      </div>

      {/* END OF ADD FOOTER */}
    </div>
  );
};

export default SingleAd;
