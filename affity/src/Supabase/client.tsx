import { createClient } from '@supabase/supabase-js'
import Cookies from 'js-cookie'

const customStorage = {
  getItem: (key: string): Promise<string | null> => {
    return new Promise((resolve) => {
      resolve(Cookies.get(key) || null) // Devuelve una promesa que resuelve el valor de la cookie
    })
  },
  setItem: (key: string, value: string): Promise<void> => {
    return new Promise((resolve) => {
      Cookies.set(key, value)
      resolve() // Devuelve una promesa vacía, ya que no necesitamos el valor de retorno
    })
  },
  removeItem: (key: string): Promise<void> => {
    return new Promise((resolve) => {
      Cookies.remove(key)
      resolve() // Devuelve una promesa vacía
    })
  },
}

export const client = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: customStorage, // Usando almacenamiento personalizado con js-cookie
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
)
