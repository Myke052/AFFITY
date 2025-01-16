'use client'

import { useRouter } from 'next/navigation'
import styles from './createClient.module.css'
import Image from 'next/image'
import Form from './form'
import FormAditional from './formAdicional'
import { FormData, FormDataAditional } from './types'
import { useState } from 'react'
import { client } from '../../Supabase/client'

export default function CreateClient() {
  const router = useRouter()

  const handleChangePage = () => {
    router.back()
  }

  const today = new Date()
  const startDate = new Date(today) // Mantén la fecha de inicio como un objeto Date
  const endDate = new Date(today.setDate(today.getDate() + 30))

  const tiempoTranscurrido = Date.now()
  const hoy = new Date(tiempoTranscurrido)

  const [formDataBasic, setFormDataBasic] = useState<FormData>({
    Cedula: '',
    Nombres: '',
    Apellidos: '',
    Telefono: '',
    'Correo electronico': '',
    'Precio mensualidad': '',
  })

  const [formDataAditional, setFormDataAditional] = useState<FormDataAditional>(
    {
      'Fecha de nacimiento': hoy.toLocaleDateString(),
      Genero: 'Masculino',
      'Tipo de sangre': 'O+',
      'Plan de pago': 'Mensual',
      'Direccion del cliente': '',
      'Nombre contacto de emergencia': '',
      'Telefono contacto de emergencia': '',
      'Objetivos del cliente': '',
      Observacion: '',
      'Fecha de inicio': startDate,
      'Fecha limite de membresia': endDate,
    }
  )

  const [submittedData, setSubmittedData] = useState<
    (FormData & FormDataAditional) | null
  >(null)

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const completeData: FormData & FormDataAditional = {
      ...formDataBasic,
      ...formDataAditional,
    }
    try {
      const { data: existingUser } = await client
        .from('Users')
        .select('Cedula')
        .eq('Cedula', completeData.Cedula)
      console.log('existingUser:', existingUser)
      if (existingUser && existingUser.length > 0) {
        alert('La cedula ya existe')
        return
      }
      const { error } = await client.from('Users').insert([completeData])

      if (error) {
        console.error('Error al guardar los datos:', error.message)
        alert('Hubo un error al guardar los datos. Intenta nuevamente.')
      } else {
        setSubmittedData(completeData)
        alert('¡Datos guardados correctamente!')
        router.replace('/')
      }
    } catch (err) {
      console.error('Error inesperado:', err)
      alert('Ocurrió un error inesperado.')
    }
  }

  return (
    <>
      <header className={styles.createHeader}>
        <div className={styles.contentCamera}>
          <Image
            className={styles.imgCamera}
            src="/Images/Camera.png"
            alt="Camara"
            width={181}
            height={201}
          />
        </div>
        <div className={styles.contentAffity}>
          <Image
            className={styles.imgAffity}
            src="/Images/aft.png"
            alt="logo affity"
            width={220}
            height={78}
          />
        </div>
        <div className={styles.contentCreateClient}>
          <div className={styles.contentText}>
            <span className={styles.textClient}> Cliente</span>{' '}
            <span className={styles.textNuevo}> Nuevo </span>
          </div>
          <Image
            className={styles.imgClients}
            src="/Images/multipleUsers.png"
            alt="Camara"
            width={76}
            height={76}
          />
        </div>
      </header>
      <main className={styles.createMain}>
        <div className={styles.information}>
          <span className={styles.texInformation}>Información</span>
          <Image
            className={styles.imgMyInformation}
            src="/Images/information.png"
            alt="Information icon"
            width={34}
            height={34}
          />
        </div>
        <form id="createClientForm" onSubmit={handleSave}>
          <Form setFormData={setFormDataBasic} formData={formDataBasic}></Form>
          <div className={styles.information} style={{ width: '345px' }}>
            <span className={styles.texInformation}>Información adicional</span>
            <Image
              className={styles.imgMyInformation}
              src="/Images/information.png"
              alt="Information icon"
              width={34}
              height={34}
            />
          </div>
          <FormAditional
            setFormData={setFormDataAditional}
            formData={formDataAditional}
          ></FormAditional>
        </form>
      </main>
      <footer className={styles.footer}>
        <button
          className={styles.btnSave}
          onClick={() => {
            const form = document.getElementById(
              'createClientForm'
            ) as HTMLFormElement
            if (form) form.requestSubmit()
          }}
        >
          Guardar
        </button>
        <button className={styles.btnCancel} onClick={handleChangePage}>
          Cancelar
        </button>
      </footer>

      {submittedData && (
        <div className={styles.jsonDisplay}>
          <h2>Datos del Cliente:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </>
  )
}
