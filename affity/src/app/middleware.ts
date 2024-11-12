import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/Supabase/client'

// Middleware para verificar si el usuario está autenticado
export async function middleware(req: NextRequest) {
  // Verifica si el usuario está autenticado
  const {
    data: { session },
  } = await client.auth.getSession()

  // Si no hay sesión (usuario no autenticado), redirige al login
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Si hay sesión, continúa con la petición
  return NextResponse.next()
}

// Aquí puedes definir las rutas a las que debe aplicarse el middleware
export const config = {
  matcher: ['/dashboard', '/profile', '/'], // Ruta de tu página principal o protegida
}
