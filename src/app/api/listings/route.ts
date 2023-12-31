import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import getCurrentUser from '@/actions/getCurrentUser';

export const POST = async (request: Request) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();
  const { title, location, content, images, coord, categories } = body;

  const listing = await prisma.listing.create({
    data: {
      title,
      content,
      images,
      location,
      coord,
      categories,
      email: currentUser?.email,
      userId: currentUser.id,
      // username?
    },
  });
  return NextResponse.json(listing);
};
