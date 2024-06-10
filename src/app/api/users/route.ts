// src/app/api/users/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { listUsers } from '@/src/app/api/listUsers'; // Убедитесь, что путь правильный

export async function GET() {
  return NextResponse.json(listUsers);
}
