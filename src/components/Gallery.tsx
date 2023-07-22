'use client';

import { Images } from '@/types';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Gallery = ({ images }: { images: Images[] }) => {
  const newImagesArray = images.map((img) => ({
    src: img.fileUrl,
  }));

  return (
    <>
      {images.length ? (
        <div className='bg-white rounded-md p-4'>
          <Carousel
            images={newImagesArray}
            style={{ height: 500, width: '100%' }}
            shouldLazyLoad
          />
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
