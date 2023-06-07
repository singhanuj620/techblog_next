import { NextResponse } from 'next/server';
import { blogsData } from '@/db/blogsData';

export async function POST(req,res) {
  const {id} = await req.json()
  const blog = blogsData.find((blog) => blog.id === id)
  return NextResponse.json({ data : blog});
}