import { NextResponse, NextRequest } from 'next/server';
import connect from '@/utils/db';
import Ad from '@/models/Ad';

export const GET = async () => {
  try {
    await connect();
    const ads = await Ad.find();
    return new NextResponse(JSON.stringify(ads), { status: 200 });
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
