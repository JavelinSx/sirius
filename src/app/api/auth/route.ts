import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { listUsers } from '../listUsers';

export async function POST(request: NextRequest) {
  const body: { email: string; password: string; remember: string } = await request.json();
  const { email, password, remember } = body;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = listUsers.find((user) => user.email === email);

  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (user && password === 'test') {
    const response = NextResponse.json({ user }, { status: 200 });
    response.cookies.set(`user_${user.email}`, 'test', {
      httpOnly: true,
      path: '/',
      maxAge: remember === 'true' ? 60 * 60 * 24 * 7 : undefined, // 1 week or session cookie
    });

    return response;
  } else {
    return NextResponse.json({ message: 'Login denied' }, { status: 401 });
  }
}
