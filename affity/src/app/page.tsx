'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { client } from '@/Supabase/client'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      // Verificamos la sesión al cargar
      const {
        data: { session },
      } = await client.auth.getSession()

      if (!session) {
        // Si no hay sesión, redirigimos a login
        router.replace('/login')
      } else {
        // Si hay sesión, redirigimos a la página principal
        router.replace('/')
      }
      // Después de la verificación, dejamos de mostrar el loading
    }

    checkSession()
  }, [router])

  // Si ya no estamos en loading, podemos mostrar el contenido de la página.
  return null
}
