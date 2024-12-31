import styles from './createClient.module.css'
import Image from 'next/image'

export default function Form() {
  return (
    <>
      <form className={styles.form}>
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
              type="number"
              placeholder="1008674821"
              required
              step="any"
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
              className={styles.inputs}
              id="emailInput"
              type="email"
              placeholder="AffityTeam@gmail.com"
              step="any"
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
            />
          </div>
        </aside>
      </form>
    </>
  )
}
