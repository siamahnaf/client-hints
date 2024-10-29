import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const userAgent = req.headers.get("user-agent") || "";
    console.log(userAgent);
    const isDarkModePreferred = /dark/i.test(userAgent);
    console.log(isDarkModePreferred);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
