import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// Middleware para verificar si el usuario está autenticado
export async function middleware(req: NextRequest) {
  // Obtener la cookie de autenticación
  const token = req.cookies.get('sb-dbwrpmrnrmnqbjkuvais-auth-token')

  // Si no existe la cookie (token), redirigir a la página de login
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // Si la cookie está presente, significa que el usuario está autenticado
  // Y puedes permitir el acceso a la ruta
  return NextResponse.next()
}

// Rutas a las que se aplica este middleware
export const config = {
  matcher: ['/dashboard', '/', '/createClient'], // Añade todas las rutas protegidas aquí
}
