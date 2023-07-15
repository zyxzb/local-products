'use client';

import { UploadButton } from '@/utils/uploadthings';
import '@uploadthing/react/styles.css';
import { ImageUploaderProps } from '@/types';

const ImageUploader = ({ handleImageUpload, images }: ImageUploaderProps) => {
  return (
    <div className='flex flex-col items-center justify-start p-12'>
      {images.length >= 4 ? (
        <p className='ut-m-0 ut-text-xs ut-leading-5 ut-text-gray-600'>
          Limit zdjęć został wykorzystany
        </p>
      ) : (
        <UploadButton
          endpoint='imageUploader'
          onClientUploadComplete={(res) => {
            // additional protection
            if (images.length >= 4) {
              return alert('Możesz dodać łacznie tylko 4 zdjęcia!');
            }
            if (res) {
              handleImageUpload(res);
              alert('Dodawanie Zakończone');
            }
          }}
          onUploadError={(error: Error) => {
            alert(`Błąd! ${error.message}`);
          }}
        />
      )}
      <div className='ut-m-0 ut-text-xs ut-leading-5 ut-text-gray-600'>
        {images.length >= 4 ? (
          <p>Dodawanie zakończone</p>
        ) : (
          <p>
            Dodano {images.length}{' '}
            {images.length === 0
              ? 'zdjęć'
              : images.length === 1
              ? 'zdjęcie'
              : 'zdjęcia'}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
