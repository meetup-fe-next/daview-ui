import { NextResponse } from 'next/server';
import { API_URL, REVALIDATE_GITHUB_DATA } from '@/constants';

export async function GET() {
  const res = await fetch(`${API_URL}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
