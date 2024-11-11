'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { client } from '@/Supabase/client'
import { ComponentType } from 'react'

function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const AuthenticatedComponent = (props: P) => {
    const router = useRouter()

    useEffect(() => {
      const checkAuth = async () => {
        const user = await client.auth.getUser()
        if (!user) {
          router.push('/login')
        }
      }
      checkAuth()
    }, [router])

    return <WrappedComponent {...props} />
  }

  // Agregar un nombre para facilitar la depuración
  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return AuthenticatedComponent
}

export default withAuth
