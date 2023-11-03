'use client';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const newImagesArray = images.map((img) => ({
    src: img,
  }));

  return (
    <>
      {images.length ? (
        <div className='bg-white rounded-md p-2.5 md:p-4 h-[280px] md:h-[500px]'>
          <Carousel
            images={newImagesArray}
            style={{ height: '100%', width: '100%' }}
            canAutoPlay={false}
            hasIndexBoard='topLeft'
            hasThumbnails={false}
            hasLeftButton={images.length > 1 && 'centerLeft'}
            hasRightButton={images.length > 1 && 'centerRight'}
            hasThumbnailsAtMax={true}
            zIndexAtMax={99999}
          />
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
