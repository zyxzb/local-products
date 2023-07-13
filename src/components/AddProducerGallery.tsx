'use client';

import { Images } from '@/types';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const AddProducerGallery = ({ images }: { images: Images[] }) => {
  const newImagesArray = images.map((img) => ({
    src: img.fileUrl,
  }));

  return (
    <div className='p-5 md:p-10 shadow-label rounded-lg'>
      <h2 className='lg:text-xl mb-2 text-darkColor'>
        Załaduj zdjecia - pierwsze zostanie zdjęciem głównym. Po załadowaniu
        zdjęcia zostaną wyświetlone 📸
      </h2>
      {images.length ? (
        <Carousel
          images={newImagesArray}
          style={{ height: 500, width: '100%' }}
        />
      ) : null}
    </div>
  );
};

export default AddProducerGallery;
