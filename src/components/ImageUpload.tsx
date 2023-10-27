'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { TbPhotoPlus } from 'react-icons/tb';

import { useCreateAdContext } from '@/context/createAddContext';

declare global {
  var cloudinary: any;
}

const ImageUpload = () => {
  const { images, setImages } = useCreateAdContext();

  const handleUpload = useCallback(
    (result: any) => {
      setImages((prevImages: string[]) => [
        ...prevImages,
        result.info.secure_url,
      ]);
    },
    [images],
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset='zai8xpzs'
      options={{
        maxFiles: 3,
      }}
    >
      {({ open }) => (
        <div
          className={`border-dashed border border-darkColor text-darkColor mb-10 rounded-lg text-center transition
          ${images.length === 0 && 'hover:opacity-70 cursor-pointer'}
          ${images.length !== 0 && 'p-5 md:p-10'}
          `}
        >
          {images.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 rounded'>
              {Array.from({ length: 3 }).map((_, index) => {
                const imageSrc = images[index];
                return imageSrc ? (
                  <div className='relative min-h-[250px] h-full sm:min-h-[300px]'>
                    <Image
                      alt='upload'
                      layout='fill'
                      src={imageSrc}
                      className='rounded object-cover'
                    />
                  </div>
                ) : (
                  <div
                    className='flex justify-center items-center flex-col gap-4 cursor-pointer hover:opacity-70 transition border-dashed border-darkColor border rounded min-h-[250px] h-full sm:min-h-[300px]'
                    onClick={() => open?.()}
                  >
                    <TbPhotoPlus size={50} />
                    <div className='text-lg'>Dodaj kolejne</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className='flex justify-center items-center flex-col gap-4 p-8 md:p-14'
              onClick={() => open?.()}
            >
              <TbPhotoPlus size={50} />
              <div className='text-lg'>
                Kliknij aby załadować zdjęcia <br /> (do 3 plików)
              </div>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
