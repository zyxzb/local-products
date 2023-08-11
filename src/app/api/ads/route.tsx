import { NextResponse, NextRequest } from 'next/server';
import connect from '@/utils/db';
import Ad from '@/models/Ad';

export const GET = async (request: NextRequest) => {
  try {
    await connect();

    const queryParams = new URL(request.nextUrl).searchParams;
    const page = parseInt(queryParams.get('page') || '1');
    const itemsPerPage = parseInt(queryParams.get('limit') || '20');
    const sortByDateItems = queryParams.get('dateDesc') || 'true';

    const totalAdsCount = await Ad.countDocuments();
    const totalPages = Math.ceil(totalAdsCount / itemsPerPage);

    const skip = (page - 1) * itemsPerPage;

    const sortOrder = sortByDateItems === 'true' ? -1 : 1;
    const ads = await Ad.find()
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(itemsPerPage);

    return new NextResponse(
      JSON.stringify({ items: ads, totalCount: totalAdsCount, totalPages }),
      { status: 200 },
    );
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log(body);
  const newAd = new Ad(body);

  try {
    await connect();
    await newAd.save();

    return new NextResponse('Ad has been successfully created', {
      status: 201,
    });
  } catch (err) {
    console.log('ERROR Z CATCH', err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
