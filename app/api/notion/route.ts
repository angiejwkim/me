import { queryDatabase } from '@/notion/client';
import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const data = await queryDatabase();
  try {
    return NextResponse.json(data, {
      headers: {
        'Cache-Control':
          'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data.' },
      { status: 500 }
    );
  }
}
