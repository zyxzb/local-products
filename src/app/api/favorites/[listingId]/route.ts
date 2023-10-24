import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import getCurrentUser from '@/actions/getCurrentUser';

interface IParams {
  listingId?: string;
}

export const POST = async (
  request: Request,
  { params }: { params: IParams },
) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoriteAds = [...(currentUser.favoriteAds || [])];

  favoriteAds.push(listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteAds,
    },
  });

  return NextResponse.json(user);
};

export const DELETE = async (
  request: Request,
  { params }: { params: IParams },
) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoriteAds = [...(currentUser.favoriteAds || [])];

  favoriteAds = favoriteAds.filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteAds,
    },
  });

  return NextResponse.json(user);
};
