import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Ad from '@/models/Ad';

export const GET = async () => {
  try {
    await connect();
    const ads = await Ad.find().sort({ createdAt: -1 }).limit(6);
    return new NextResponse(JSON.stringify(ads), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
