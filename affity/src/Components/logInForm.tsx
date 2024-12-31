// LoginForm.tsx
'use client'
import { useState } from 'react'
import { client } from '../Supabase/client'
import styles from './logInForm.module.css'

interface LoginFormProps {
  onLoginSuccess: () => void
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function logIn(e: React.FormEvent) {
    e.preventDefault()

    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error(error)
    }
    if (data.session) {
      setTimeout(() => {
        client.auth.signOut()
      }, 3600000)

      onLoginSuccess()
    }
  }

  return (
    <form className={styles.formulario} action="/login" method="POST">
      <h1 className={styles.iniciar}>
        INICIAR <span className={styles.sesion}>SESIÓN</span>
      </h1>
      <input
        className={styles.entradas}
        type="text"
        id="username"
        name="username"
        placeholder="Usuario"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className={styles.entradas}
        type="password"
        id="password"
        name="password"
        placeholder="Contraseña"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className={styles.signUP} type="submit" onClick={logIn}>
        INICIAR SESIÓN
      </button>
      <div className={styles.olvidar}>
        <a className={styles.olvidarLink} href="/reset">
          {' '}
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </form>
  )
}
