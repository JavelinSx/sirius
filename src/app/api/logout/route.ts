import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { listUsers } from '../listUsers';

export async function POST(request: NextRequest) {
  const body: { email: string } = await request.json();
  const { email } = body;

  const cookieStore = cookies();
  const currentUserCookie = cookieStore.get(`user_${email}`);

  if (currentUserCookie) {
    const response = NextResponse.json({ message: 'Logged out' }, { status: 200 });
    cookieStore.delete(`user_${email}`); // Удаление куки текущего пользователя
    return response;
  }

  return NextResponse.json({ message: 'No current user' }, { status: 404 });
}
