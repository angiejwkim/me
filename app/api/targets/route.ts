import { getAllTargets } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const targets = await getAllTargets();
  return NextResponse.json(targets);
}
