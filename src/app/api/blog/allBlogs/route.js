import { NextResponse } from 'next/server';
import { blogsData } from '@/db/blogsData';

export async function GET(req) {
    return NextResponse.json({ data : blogsData });
}