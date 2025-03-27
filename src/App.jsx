import React, {useState} from 'react'
import { MdPerson } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import './index.css';
import {NavBar} from "./navBar.jsx";


export function App () {
    const [fechaCita, setFechaCita] = useState('');
    return(
        <div>
            <NavBar />
            <section>
                BARBER SHOP <br />
                <span> 
                    Camina con estilo<br></br>
                    agendar cita
                </span>
                <div>
                <input type='date' value={fechaCita} onChange={(e) => setFechaCita(e.target.value)}/>
                </div>
            </section>
            <footer>
                <div>
                </div>
                <div>
                    <span>
                        <h3>Barber Shop</h3>
                        <p>Barber Shop es una empresa dedicada a brindar servicios de barbería de alta calidad a nuestros clientes. Nuestro equipo de barberos altamente capacitados y experimentados se encargará de brindarle un servicio personalizado y de calidad en cada una de nuestras citas.</p>
                    </span>
                    <span>
                        <h3>Horario</h3>
                        <p>Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                        <p>Sábados: 10:00 AM - 4:00 PM</p>
                        <p>Domingos: Cerrado</p>
                    </span>
                    <span>
                        <h3>Contacto</h3>
                        <a href="tel:123456789" className="no-style">Telefono: 123456789</a>
                        <br />
                        <a href="mailto:barbershop@gmail.com" className="no-style">Correo: barbershop@gmail.com</a>
                    </span>
                </div>
            </footer>
        </div>
    )
}
