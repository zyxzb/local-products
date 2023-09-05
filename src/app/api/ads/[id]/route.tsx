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

export const DELETE = async (
  request: NextRequest,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    await connect();
    await Ad.findByIdAndDelete(id);
    return new NextResponse('Ad has been deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
