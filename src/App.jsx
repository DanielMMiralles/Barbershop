import React, {useState} from 'react'
import { MdPerson } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import './index.css';



export function App () {
    return(
        <div>
            <nav>
                <span>
                    BARBER SHOP
                </span>
                <ul className="nave">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Ubicacion</a></li>
                    <li><a href="/contact">Barberos</a></li>
                    <li><a href="/contact">Servicios</a></li>
                    <li><a href="/contact">Galeria</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
                <div className="user">
                    <MdPerson/>
                    <button>REGISTRARSE</button>
                </div>
            </nav>
            <section>
                BARBER SHOP <br />
                <span> 
                    Camina con estilo
                </span>
                <div>
                    <button>Agendar cita</button>
                </div>
            </section>
            <footer>
                <div>
                    <button className='fc-button'><FaFacebook /></button>
                    <button><FaXTwitter /></button>
                    <button><RiInstagramFill/></button>
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
                        <p>Telefono: 123456789</p>
                        <p>Correo: barbershop@gmail.com</p>
                    </span>
                </div>
            </footer>
        </div>
    )
}
