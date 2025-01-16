'use client'

import { useState } from 'react'
import { client } from '@/Supabase/client'
import styles from './resetPassword.module.css'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      const { error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset/resetUpdate`,
      })

      if (error) {
        setError('No se pudo enviar el correo. Verifica el correo ingresado.')
        return
      }

      setMessage(
        'Se ha enviado un correo para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada.'
      )
      setError(null)
      setEmail('')
    } catch (err) {
      setError('Ocurrió un error inesperado. Intenta nuevamente.')
      console.error('Error al enviar correo de recuperación:', err)
    } finally {
      setIsSubmitting(false) // Permite hacer clic nuevamente al finalizar
    }
  }

  return (
    <form className={styles.resetForm} onSubmit={handleResetPassword}>
      <h1 className={styles.title}>Restablecer Contraseña</h1>

      {message && <p className={styles.successMessage}>{message}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}

      <input
        className={styles.input}
        type="email"
        placeholder="Ingresa tu correo electrónico"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setMessage(null)
        }}
        required
      />
      <button
        className={styles.submitButton}
        type="submit"
        disabled={isSubmitting} // Deshabilita el botón si isSubmitting es true
      >
        {isSubmitting ? 'Enviando...' : 'Enviar correo de recuperación'}
      </button>
    </form>
  )
}
