import styles from './createClient.module.css'
import Image from 'next/image'

export default function FormAditional() {
  return (
    <form className={styles.form}>
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
          />
        </div>
        <div className={styles.containerGender}>
          <label htmlFor="optionsInput" className={styles.labels}>
            Genero
          </label>
          <select className={styles.inputsAditional} id="optionsInput">
            {' '}
            <option value="opcion1">Masculino</option>
            <option value="opcion2">Femenino</option>
          </select>
        </div>
        <div className={styles.containerBloody}>
          <label htmlFor="bloodTypeInput" className={styles.labels}>
            Tipo de sangre
          </label>
          <select
            className={`${styles.inputsAditional} ${styles.bloodTypeInput}`}
            id="bloodTypeInput"
          >
            {' '}
            <option value="opcion1">O+</option>
            <option value="opcion2">O-</option>
            <option value="opcion1">A+</option>
            <option value="opcion2">A-</option>
            <option value="opcion1">B+</option>
            <option value="opcion2">B-</option>
            <option value="opcion1">AB+</option>
            <option value="opcion2">AB-</option>
          </select>
        </div>

        <div className={styles.containerPay}>
          <label htmlFor="payInput" className={styles.labels}>
            Plan de pago
          </label>
          <select
            className={`${styles.inputsAditional} ${styles.payInput}`}
            id="payInput"
          >
            {' '}
            <option value="opcion1">Mensual</option>
            <option value="opcion2">Bimestral</option>
            <option value="opcion1">Trimestral</option>
            <option value="opcion2">Semestral</option>
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
          />
        </div>

        <div className={`${styles.containerImg} ${styles.otherStyle}`}>
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
          />
        </div>

        <div className={styles.containerNameEmergency}>
          <label htmlFor="emergencyContactInput" className={styles.labelsBigs}>
            Nombre contacto de emergencia
          </label>
          <input
            className={styles.inputs}
            id="emergencyContactInput"
            type="text"
            placeholder="Viviana"
            step="any"
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
          />
        </div>
      </div>
    </form>
  )
}
