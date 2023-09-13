import { NextResponse, NextRequest } from 'next/server';
import connect from '@/utils/db';
import Ad from '@/models/Ad';
import { SortOrder } from 'mongoose';

export const dynamic = 'force-dynamic';

interface Query {
  title?: { $regex: RegExp };
  location?: { $regex: RegExp };
}

export const GET = async (request: NextRequest) => {
  try {
    await connect();
    const url = new URL(request.nextUrl);
    const page = parseInt(url.searchParams.get('page') || '1');
    const itemsPerPage = parseInt(url.searchParams.get('limit') || '20');
    const sortParam = url.searchParams.get('sort') || 'dateNewest';

    const name = url.searchParams.get('name')?.toLocaleLowerCase();
    const location = url.searchParams.get('location')?.toLocaleLowerCase();

    const query: Query = {};

    if (name) {
      query.title = { $regex: new RegExp(name, 'i') };
    }

    if (location) {
      query.location = { $regex: new RegExp(location, 'i') };
    }

    const skip = (page - 1) * itemsPerPage;

    let sortOrder: SortOrder = -1; // Default sorting
    let sortField: string = 'createdAt'; // Default sorting

    if (sortParam === 'dateOldest') {
      sortOrder = 1;
    } else if (sortParam === 'nameAZ') {
      sortField = 'title';
      sortOrder = 1;
    } else if (sortParam === 'nameZA') {
      sortField = 'title';
      sortOrder = -1;
    }

    const collation = {
      locale: 'pl',
      caseLevel: true,
      numericOrdering: true,
    };

    const ads = await Ad.find(query)
      .collation(collation)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(itemsPerPage);

    const totalAdsCount = await Ad.countDocuments(query);
    const totalPages = Math.ceil(totalAdsCount / itemsPerPage);

    return new NextResponse(
      JSON.stringify({ items: ads, totalCount: totalAdsCount, totalPages }),
      { status: 200 },
    );
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
