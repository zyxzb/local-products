'use client';

import { UploadButton } from '@/utils/uploadthings';
import '@uploadthing/react/styles.css';
import { ImageUploaderProps } from '@/types';

const ImageUploader = ({ handleImageUpload, images }: ImageUploaderProps) => {
  return (
    <div className='flex flex-col items-center justify-start p-12'>
      {images.length >= 4 ? (
        <p className='mt-2 text-xl'>Limit zdjęć został wykorzystany</p>
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
      {images.length >= 4 ? (
        <p className='mt-2 text-xl'>Dodawanie zakończone</p>
      ) : (
        <p className='mt-2 text-xl'>
          Dodano {images.length}{' '}
          {images.length === 0
            ? 'zdjęć'
            : images.length === 1
            ? 'zdjęcie'
            : 'zdjęcia'}
        </p>
      )}
    </div>
  );
};

export default ImageUploader;
