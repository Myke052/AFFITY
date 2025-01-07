import styles from './createClient.module.css'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { FormDataAditional } from './types'

export default function FormAditional({
  setFormData,
  formData,
}: {
  setFormData: Dispatch<SetStateAction<FormDataAditional>>
  formData: FormDataAditional
}) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <main className={styles.form}>
      <div className={styles.inputsContainerAditional}>
        <div>
          <label htmlFor="dateInput" className={styles.labels}>
            Fecha de nacimiento
          </label>
          <input
            className={styles.inputsAditional}
            id="dateInput"
            type="date"
            placeholder="dd/mm/aaaa"
            step="any"
            name="Fecha de nacimiento"
            value={formData['Fecha de nacimiento']}
            onChange={handleChange}
          />
        </div>
        <div className={styles.containerGender}>
          <label htmlFor="optionsInput" className={styles.labels}>
            Genero
          </label>
          <select
            className={styles.inputsAditional}
            id="optionsInput"
            name="Genero"
            value={formData.Genero}
            onChange={handleChange}
          >
            {' '}
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className={styles.containerBloody}>
          <label htmlFor="bloodTypeInput" className={styles.labels}>
            Tipo de sangre
          </label>
          <select
            className={`${styles.inputsAditional} ${styles.bloodTypeInput}`}
            id="bloodTypeInput"
            name="Tipo de sangre"
            value={formData['Tipo de sangre']}
            onChange={handleChange}
          >
            {' '}
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className={styles.containerPay}>
          <label htmlFor="payInput" className={styles.labels}>
            Plan de pago
          </label>
          <select
            className={`${styles.inputsAditional} ${styles.payInput}`}
            id="payInput"
            name="Plan de pago"
            value={formData['Plan de pago']}
            onChange={handleChange}
          >
            {' '}
            <option value="Mensual">Mensual</option>
            <option value="Bimestral">Bimestral</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Semestral">Semestral</option>
          </select>
        </div>

        <div>
          <label htmlFor="addressInput" className={styles.labels}>
            Dirección del cliente
          </label>
          <input
            className={styles.inputs}
            id="addressInput"
            type="text"
            placeholder="cra 5ta #12-02 barrio Bolivar, Yumbo"
            step="any"
            name="Direccion del cliente"
            value={formData['Direccion del cliente']}
            onChange={handleChange}
          />
        </div>

        <div
          className={`${styles.containerNameEmergency} ${styles.otherStyle}`}
        >
          <label htmlFor="emergencyContactInput" className={styles.labelsBigs}>
            Nombre contacto de emergencia
          </label>
          <input
            className={styles.inputs}
            id="emergencyContactInput"
            type="text"
            placeholder="Viviana"
            step="any"
            name="Nombre contacto de emergencia"
            value={formData['Nombre contacto de emergencia']}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.containerImg}  ${styles.containerPhone}`}>
          <label htmlFor="phoneAditionalInput" className={styles.labelsBigs}>
            Télefono contacto de emergencia
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
            id="phoneAditionalInput"
            type="tel"
            placeholder="3152431778"
            maxLength={10}
            pattern="[0-9]{10}"
            name="Telefono contacto de emergencia"
            value={formData['Telefono contacto de emergencia']}
            onChange={handleChange}
          />
        </div>

        <div className={styles.textAreaObject}>
          <label htmlFor="objetivesTextArea" className={styles.labelsBigs}>
            Objetivos del cliente
          </label>
          <textarea
            className={`${styles.inputs} ${styles.textAreas}`}
            id="objetivesTextArea"
            placeholder="Metas (bajar de peso, ganar músculo, tonificar, etc.)"
            name="Objetivos del cliente"
            value={formData['Objetivos del cliente']}
            onChange={handleChange}
          />
        </div>

        <div className={styles.textAreaObservations}>
          <label htmlFor="observationsTextArea" className={styles.labelsBigs}>
            Observaciones
          </label>
          <textarea
            className={`${styles.inputs} ${styles.textAreas}`}
            id="observationsTextArea"
            placeholder="Agrega algún comentario o detalle"
            name="Observacion"
            value={formData.Observacion}
            onChange={handleChange}
          />
        </div>
      </div>
    </main>
  )
}
