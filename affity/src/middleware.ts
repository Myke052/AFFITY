// middleware.ts
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('sb-dbwrpmrnrmnqbjkuvais-auth-token')

  // Lógica para el reset de contraseña

  // Para las rutas protegidas que no sean de reset
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/createClient'], // Aquí incluyes todas las rutas que requieras
}
