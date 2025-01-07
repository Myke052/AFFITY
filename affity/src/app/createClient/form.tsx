import styles from './createClient.module.css'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { FormData } from './types'

export default function Form({
  setFormData,
  formData,
}: {
  setFormData: Dispatch<SetStateAction<FormData>>
  formData: FormData
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <main className={styles.form}>
        <aside className={styles.inputsContainer}>
          <div>
            <label
              htmlFor="numericInput"
              className={`${styles.labels} ${styles.ancho}`}
            >
              Cédula
            </label>
            <input
              className={styles.inputs}
              id="numericInput"
              type="text"
              placeholder="1008674821"
              required
              step="any"
              name="Cedula"
              value={formData.Cedula}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nameInput" className={styles.labels}>
              Nombres
            </label>
            <input
              className={styles.inputs}
              id="nameInput"
              type="text"
              placeholder="Juan Carlos"
              required
              step="any"
              name="Nombres"
              value={formData.Nombres}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastNameInput" className={styles.labels}>
              Apellidos
            </label>
            <input
              className={styles.inputs}
              id="lastNameInput"
              type="text"
              placeholder="García Estrada"
              required
              step="any"
              name="Apellidos"
              value={formData.Apellidos}
              onChange={handleChange}
            />
          </div>
          <div className={styles.containerImg}>
            <label htmlFor="phoneInput" className={styles.labels}>
              Télefono
            </label>
            <div className={styles.containers}>
              <Image
                className={styles.imgPhone}
                src="/Images/phone.png"
                alt="Phone Icon"
                width={25}
                height={25}
              />
            </div>

            <input
              className={styles.inputs}
              id="phoneInput"
              type="tel"
              placeholder="3152431778"
              maxLength={10}
              pattern="[0-9]{10}"
              name="Telefono"
              value={formData.Telefono}
              onChange={handleChange}
            />
          </div>
          <div className={styles.containerImg}>
            <label htmlFor="emailInput" className={styles.labels}>
              Correo electrónico
            </label>
            <div className={styles.containers}>
              <Image
                className={styles.imgEmail}
                src="/Images/email.png"
                alt="Phone Icon"
                width={25}
                height={25}
              />
            </div>

            <input
              className={`${styles.inputs} ${styles.inputEmail}`}
              id="emailInput"
              type="email"
              placeholder="AffityTeam@gmail.com"
              step="any"
              name="Correo electronico"
              value={formData['Correo electronico']}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="priceInput" className={styles.labels}>
              Precio Mensualidad
            </label>
            <input
              className={styles.inputs}
              id="priceInput"
              type="number"
              placeholder="$ 65.000"
              min="0"
              required
              step="any"
              name="Precio mensualidad"
              value={formData['Precio mensualidad']}
              onChange={handleChange}
            />
          </div>
        </aside>
      </main>
    </>
  )
}
