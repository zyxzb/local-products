import { NextResponse, NextRequest } from 'next/server';
import connect from '@/utils/db';
import Ad from '@/models/Ad';

export const GET = async (
  request: NextRequest,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    await connect();
    const post = await Ad.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
