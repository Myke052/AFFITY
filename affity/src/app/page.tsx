import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.logo}>
        <Image
          src="/Images/aft.png"
          alt="logo affity"
          width={390}
          height={121}
          layout="intrinsic"
        />
      </div>
      <main className={styles.cuadro}>
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
          />

          <input
            className={styles.entradas}
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />

          <button className={styles.signUP} type="submit">
            INICIAR SESIÓN
          </button>
          <div className={styles.olvidar}>
            <a className={styles.olvidarLink} href="/reset">
              {' '}
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </main>
      <div className={styles.containerLeft}>
        <div className={styles.leftTop}>
          <Image
            src="/assets/leftTop.svg"
            alt="Left Top"
            width={479}
            height={433}
          />
        </div>
        <div className={styles.leftDown}>
          <Image
            src="/assets/leftDown.svg"
            alt="Left Down"
            width={484}
            height={282}
          />
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.rightDown}>
          <Image
            src="/assets/rightDown.svg"
            alt="right Down"
            width={495}
            height={437}
          />
        </div>
        <div className={styles.rightTop}>
          <Image
            src="/assets/rightTop.svg"
            alt="right Top"
            width={452}
            height={289}
          />
        </div>
      </div>
    </>
  )
}
