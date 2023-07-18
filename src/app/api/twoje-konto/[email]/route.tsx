import { NextResponse, NextRequest } from 'next/server';
import connect from '@/utils/db';
import Ad from '@/models/Ad';

export const GET = async (
  request: NextRequest,
  { params: { email } }: { params: { email: string } },
) => {
  try {
    await connect();
    const posts = await Ad.find({ email: email });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
