'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  // useEffect(() => {
  //   router.push('/login') // Redirige a la página de login
  // }, [])
  return <>hello world</>
}
