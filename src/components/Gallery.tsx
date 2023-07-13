'use client';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Gallery = ({ images }: { images: Array<string> }) => {
  const newImagesArray = images.map((img) => ({
    src: img,
  }));

  return (
    <>
      {images.length ? (
        <Carousel
          images={newImagesArray}
          style={{ height: 500, width: '100%' }}
          shouldLazyLoad
        />
      ) : null}
    </>
  );
};

export default Gallery;
