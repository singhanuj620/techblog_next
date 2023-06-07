import { NextResponse } from 'next/server';

export async function GET(req) {
  return NextResponse.json({ name: 'John Doe' });
}

export async function POST(req,res) {
  const {searchParams} = new URL(req.url);
  const temp = searchParams.get('id')
  let t = await req.json()
  return NextResponse.json({ name: 'John Doe', temp, t});
}