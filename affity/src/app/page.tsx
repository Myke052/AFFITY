'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { client } from '@/Supabase/client'
import styles from './page.module.css'
import CustomTable from '@/app/Table'
import { TableContainer } from '@mui/material'
import { useEffect, useState } from 'react'

type client = {
  Cedula: string
  Nombres: string
  Apellidos: string
  Telefono: string
  'Correo electronico': string
  State: 'Activo'
  Actions: string
}
export default function Home() {
  const router = useRouter()

  // Función de cierre de sesión
  const handleSignOut = async () => {
    // Cerrar sesión del usuario
    await client.auth.signOut()

    // Redirigir al login después de cerrar sesión
    router.replace('/login')
  }

  const handleCreateClient = () => {
    router.push('/createClient')
  }

  const [clients, setClients] = useState<client[]>([])
  const [loading, setLoading] = useState(true)

  const fetchClients = async () => {
    try {
      setLoading(true)
      const { data, error } = await client
        .from('Users')
        .select('Cedula, Nombres, Apellidos, Telefono, "Correo electronico"')
      if (error) throw error
      setClients(
        (data || []).map((client) => ({
          ...client,
          State: 'Activo',
          Actions: '',
        }))
      )
    } catch (error) {
      console.error('Error fetching clients:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  if (loading) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <p>Cargando datos...</p>
      </div>
    )
  }
  return (
    <>
      <section className={styles.complete}>
        <section className={styles.firstVar}>
          <div className={styles.section}>
            <Image
              className={styles.imgAffity}
              src="/Images/aft.png"
              alt="logo affity"
              width={220}
              height={78}
            />
          </div>
          <div className={styles.centerContainer}>
            <div>
              <Image
                className={styles.imgVar}
                src="/Images/Camera.png"
                alt="Camara"
                width={181}
                height={201}
              />
            </div>
            <div className={styles.contentVar}>
              <input
                type="text"
                className={styles.searchVar}
                placeholder="Buscar cliente..."
              />
              <button className={styles.btnSearch}>
                <Image
                  className={styles.imgSearch}
                  src="/Images/searchIcon.png"
                  alt="SearchIcon"
                  width={26}
                  height={26}
                />
              </button>
            </div>
          </div>
          <div className={styles.contentCreateClient}>
            <button onClick={handleSignOut} className={styles.btnLogOut}>
              <Image
                className={styles.imgLogOut}
                src="/Images/logout.png"
                alt="logOutImage"
                width={30}
                height={30}
              />
            </button>
            <button
              onClick={handleCreateClient}
              className={styles.btnCreateClient}
            >
              <Image
                className={styles.imgCreateClient}
                src="/Images/createClientIcon.png"
                alt="Create Client Icon"
                width={30}
                height={30}
              />
              Crear Nuevo Cliente
            </button>
          </div>
        </section>
        <div className={styles.quarer}>
          <div className={styles.myCustomers}>
            <span className={styles.texClients}>Mis clientes</span>
            <Image
              className={styles.imgMyCustomers}
              src="/Images/user.png"
              alt="User Icon"
              width={34}
              height={34}
            />
          </div>
          <TableContainer className={styles.tableContainer}>
            <CustomTable rows={clients} />
          </TableContainer>
        </div>
      </section>
    </>
  )
}
