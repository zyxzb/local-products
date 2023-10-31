import getSearchedListings from '@/actions/getSearchedListings';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const searchedValue = request.nextUrl.searchParams;

  const name = searchedValue.get('name');
  const location = searchedValue.get('location');

  const data = await getSearchedListings({ name, location });

  return NextResponse.json(data);
};
