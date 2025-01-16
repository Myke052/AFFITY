'use client'
import { useEffect, useState } from 'react'
import { client } from '@/Supabase/client'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './resetUpdate.module.css'

export default function ResetUpdate() {
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  // Esquema de validación de Yup
  const schema = yup.object().shape({
    password: yup
      .string()
      .required('La contraseña es obligatoria.')
      .min(6, 'La contraseña debe tener al menos 6 caracteres.'),
  })

  // react-hook-form con yup
  const {
    register,
    handleSubmit,
    setError: setFormError,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)

    const accessToken = params.get('access_token')
    const type = params.get('type')

    if (type === 'recovery' && accessToken) {
      client.auth
        .setSession({ access_token: accessToken, refresh_token: '' })
        .then(() => {
          setLoading(false)
          // Configurar temporizador para cerrar sesión después de 20 segundos
          const timer = setTimeout(() => {
            client.auth.signOut()
            router.replace('/login')
          }, 20000)
          return () => clearTimeout(timer)
        })
        .catch(() => {
          setError('El enlace de recuperación no es válido o ha expirado.')
          setLoading(false)
        })
    } else {
      setError('El enlace de recuperación no es válido o ha expirado.')
      setLoading(false)
    }
  }, [router])

  const handleUpdatePassword = async (data: { password: string }) => {
    setIsSubmitting(true)
    try {
      const { error } = await client.auth.updateUser({
        password: data.password,
      })
      if (error) {
        setFormError('password', {
          message: 'No se pudo actualizar la contraseña. Intenta nuevamente.',
        })
        setIsSubmitting(true)
        return
      }
      setIsPasswordUpdated(true)

      setMessage(
        '¡Contraseña actualizada correctamente! Ahora puedes iniciar sesión.'
      )
      await client.auth.signOut()

      setTimeout(() => {
        router.replace('/login')
      }, 60000)
    } catch (err) {
      console.error('Error al actualizar contraseña:', err)
      setFormError('password', {
        message: 'Ocurrió un error inesperado. Intenta nuevamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = async () => {
    await trigger('password') // Valida al escribir
  }

  if (loading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h1 className={styles.errorTitle}>Enlace inválido</h1>
        <p className={styles.errorMessage}>{error}</p>
        <button
          className={styles.returnButton}
          onClick={() => router.replace('/login')}
        >
          Volver al inicio de sesión
        </button>
      </div>
    )
  }
  const handleButtonClick = () => {
    router.replace('/login')
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleUpdatePassword)}
      >
        <h1 className={styles.title}>Restablecer Contraseña</h1>
        {message && <p className={styles.successMessage}>{message}</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div>
          <input
            className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            type="password"
            placeholder="Nueva contraseña"
            {...register('password')}
            onChange={(e) => {
              register('password').onChange(e)
              handleInputChange()
            }}
            onFocus={() => clearErrors('password')}
            disabled={isPasswordUpdated}
          />
          {errors.password && (
            <small className={styles.errorText}>
              {errors.password.message}
            </small>
          )}
        </div>
        {isPasswordUpdated ? (
          <button
            className={styles.submitButton}
            type="button"
            onClick={handleButtonClick}
          >
            Volver a iniciar sesión
          </button>
        ) : (
          <button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting || isPasswordUpdated}
          >
            {isSubmitting ? 'Actualizando...' : 'Actualizar contraseña'}
          </button>
        )}
      </form>
    </div>
  )
}
