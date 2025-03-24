import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from '/src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div>
        <nav>
          <ul class="nave">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Ubicacion</a></li>
            <li><a href="/contact">Barberos</a></li>
            <li><a href="/contact">Servicios</a></li>
            <li><a href="/contact">Galeria</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
  </StrictMode>,
)
