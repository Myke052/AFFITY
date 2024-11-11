'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { client } from '@/Supabase/client'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (!client.auth.getUser()) {
      router.push('/login')
    }
  }, [router])

  useEffect(() => {
    // Suscripción al estado de autenticación
    const { data } = client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.push('/login')
      } else {
        router.push('/')
      }
    })

    // Limpieza del listener al desmontar el componente
    return () => {
      data?.subscription.unsubscribe() // Accediendo a subscription a través de data
    }
  }, [router])

  return (
    <>
      hello world
      <button onClick={() => client.auth.signOut()}> Salir</button>
    </>
  )
}
