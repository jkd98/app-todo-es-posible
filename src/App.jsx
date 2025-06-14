import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <h1>Aplicación: <strong>TodoEsPosible</strong></h1>
      </header>
      <main className='contenido'>
        Soy el contenido de la aplicación
      </main>
      <footer className='footer'>
        Creado por Juan David Lara Robles | copyright
      </footer>
    </>
  )
}

export default App
