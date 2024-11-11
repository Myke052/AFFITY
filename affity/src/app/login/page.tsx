'use client'

import styles from './login.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LoginForm from '../../Components/logInForm'
import { useEffect } from 'react'
import { client } from '@/Supabase/client'

export default function Login() {
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await client.auth.getUser()

      if (data.user) {
        router.push('/')
      }
    }

    checkUser()
  }, [router])

  const handleLoginSuccess = () => {
    router.push('/')
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
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </main>
      <div className={styles.containerLeft}>
        <div className={styles.leftTop}>
          <Image
            src="/assets/leftTop.svg"
            alt="Left Top"
            width={479}
            height={433}
          />
        </div>
        <div className={styles.leftDown}>
          <Image
            src="/assets/leftDown.svg"
            alt="Left Down"
            width={484}
            height={282}
          />
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.rightDown}>
          <Image
            src="/assets/rightDown.svg"
            alt="right Down"
            width={495}
            height={437}
          />
        </div>
        <div className={styles.rightTop}>
          <Image
            src="/assets/rightTop.svg"
            alt="right Top"
            width={452}
            height={289}
          />
        </div>
      </div>
    </>
  )
}
