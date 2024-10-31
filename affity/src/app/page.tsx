export default function Home() {
  return (
    <main>
      <h2>Inicio de Sesión</h2>
      <form action="/login" method="POST">
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </main>
  )
}

console.log('hay un cambio en el archivo')
