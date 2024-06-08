import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { useAppSelector } from "@/src/lib/hooks";

export async function POST(request:NextRequest) {
    const body: {login: string, password:string, rememberMe: boolean} = await request.json()
    const {login, password, rememberMe} = body

    await new Promise((resolve) => setTimeout(resolve, 5000))
    if(login==='test@mail.ru' && password==='test'){
        const response = NextResponse.json({message: 'Login success'}, {status: 200})
        response.cookies.set('currentUser', 'test', { httpOnly: true, path: '/', maxAge: rememberMe ?  60 * 60 * 24 * 7 : 60 * 60 });
        return response
    } else {
        return NextResponse.json({message: 'Login denied'}, {status: 401})
    }

}