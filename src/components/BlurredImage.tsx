import getBase64 from '@/utils/getBase64';
import Image from 'next/image';

interface BlurredImageProps {
  images: any;
  title: string;
  classNames?: string;
}

const BlurredImage = async ({
  images,
  title,
  classNames,
}: BlurredImageProps) => {
  if (!images.length || null || undefined) {
    return (
      <Image
        src={'/landWhite.png'}
        alt={title}
        fill={true}
        className={classNames}
      />
    );
  }
  const myBlurDataUrl = await getBase64(images[0]);
  console.log('myBlurDataUrl ->>', myBlurDataUrl);

  return (
    <Image
      src={images[0]}
      alt={title}
      fill={true}
      className={classNames}
      placeholder='blur'
      blurDataURL={myBlurDataUrl}
    />
  );
};

export default BlurredImage;
