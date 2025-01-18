'use client'

import styles from './login.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LoginForm from '../../Components/logInForm'
import { useEffect, useState } from 'react'
import { client } from '@/Supabase/client'

export default function Login() {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    // Suscripción al estado de autenticación
    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        router.push('/')
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [router])

  const handleLoginSuccess = () => {
    router.push('/')
  }

  const handleLoginError = (message: string) => {
    setErrorMessage(message)
  }

  return (
    <>
      <div className={styles.logo}>
        <Image
          src="/Images/aft.png"
          alt="logo affity"
          width={390}
          height={121}
          layout="intrinsic"
          priority
        />
      </div>
      <main className={styles.cuadro}>
        {errorMessage && <></>}
        <LoginForm
          onLoginSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </main>
      <div className={styles.containerLeft}>
        <div className={styles.leftTop}>
          <Image
            src="/Assets/leftTop.svg"
            alt="Left Top"
            width={479}
            height={433}
          />
        </div>
        <div className={styles.leftDown}>
          <Image
            src="/Assets/leftDown.svg"
            alt="Left Down"
            width={484}
            height={282}
          />
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.rightDown}>
          <Image
            src="/Assets/rightDown.svg"
            alt="right Down"
            width={495}
            height={437}
          />
        </div>
        <div className={styles.rightTop}>
          <Image
            src="/Assets/rightTop.svg"
            alt="right Top"
            width={452}
            height={289}
          />
        </div>
      </div>
    </>
  )
}
