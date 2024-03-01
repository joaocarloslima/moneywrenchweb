import { NextResponse } from 'next/server'
 
export function middleware(request) {
    if(!request.cookies.has('moneywrench_jwt'))
         return NextResponse.redirect(new URL('/', request.url))
}
 

export const config = {
  matcher: [
    '/movimentacoes/:path*',
    '/categorias/:path*',
  ]
}