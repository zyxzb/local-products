'use client';

import Image from 'next/image';
import React from 'react';
import LazyLoad from 'react-lazy-load';

interface LazyImageProps {
  cardImage: string;
  title: string;
  location?: string;
  classNames?: string;
}

const LazyImage = ({ cardImage, title, classNames }: LazyImageProps) => {
  return (
    <LazyLoad threshold={0.95}>
      <Image
        src={cardImage}
        alt={`${title} - ${location}`}
        fill={true}
        className={classNames}
      />
    </LazyLoad>
  );
};

export default LazyImage;
