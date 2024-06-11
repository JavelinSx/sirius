import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { listUsers } from '../listUsers';

export async function POST(request: NextRequest) {
  const body: { email: string; password: string; rememberMe: boolean } = await request.json();
  const { email, password, rememberMe } = body;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = listUsers.find((user) => user.email === email);

  if (user && password === 'test') {
    const response = NextResponse.json({ user }, { status: 200 });

    response.cookies.set(`user_${user.email}`, 'test', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week or session cookie
    });

    return response;
  } else {
    return NextResponse.json({ message: 'Login denied' }, { status: 401 });
  }
}
