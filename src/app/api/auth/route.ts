import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body: {email: string, password:string, rememberMe: boolean} = await request.json()
    const {email, password, rememberMe} = body

    await new Promise((resolve) => setTimeout(resolve, 1000))
    if(email==='test@mail.ru' && password==='test'){
        const response = NextResponse.json({message: 'Login success'}, {status: 200})
        response.cookies.set('currentUser', 'test', { httpOnly: true, path: '/', maxAge: rememberMe ?  60 * 60 * 24 * 7 : 60 * 60 });
        return response
    } else {
        return NextResponse.json({message: 'Login denied'}, {status: 401})
    }

}