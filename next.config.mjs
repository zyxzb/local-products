// @ts-check
import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['@plaiceholder/ui'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
  },
};

export default withPlaiceholder(nextConfig);
