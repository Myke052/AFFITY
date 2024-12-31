'use client'

import { useRouter } from 'next/navigation'
import styles from './createClient.module.css'
import Image from 'next/image'
import Form from './form'
import FormAditional from './formAdicional'

export default function CreateClient() {
  const router = useRouter()

  const handleChangePage = () => {
    router.back()
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
        <Form></Form>
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
        <FormAditional></FormAditional>
      </main>
      <footer className={styles.footer}>
        <button className={styles.btnSave}> Guardar</button>
        <button className={styles.btnCancel} onClick={handleChangePage}>
          {' '}
          Cancelar{' '}
        </button>
      </footer>
    </>
  )
}
