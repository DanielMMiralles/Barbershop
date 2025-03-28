import React, {useState} from 'react'
import { MdPerson } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import './Navbar.css';
import './App.css' ;
import {NavBar} from "./navBar.jsx";


export function App () {
    const [fechaCita, setFechaCita] = useState('');
    return(
        <div>
            {/* NavBar component */}
            <NavBar />
            <br/><br/><br/><br/>
            <section>
           <div className="contenedor">
                <div className="Descripcion">
                    <h2>aBienvenidos a "Nombre de la Barbería" - Tu estilo, nuestro arte</h2><br />
                    <p>En "Nombre de la Barbería", donde la elegancia se encuentra con la precisión. Nuestro equipo de barberos altamente capacitados y apasionados está listo para brindarte un servicio excepcional en cada visita. Desde cortes de cabello hasta tratamientos de barba y peinados, estamos aquí para hacer que tu visión se convierta en realidad. ¡Únete a nosotros y descubre la artesanía que nos define. ¡Tu estilo, nuestra pasión!</p>
                </div>
                <div className="Descripcion">
                    <h2>bBienvenidos a "Nombre de la Barbería" - Tu estilo, nuestro arte</h2><br />
                    <p>En "Nombre de la Barbería", donde la elegancia se encuentra con la precisión. Nuestro equipo de barberos altamente capacitados y apasionados está listo para brindarte un servicio excepcional en cada visita. Desde cortes de cabello hasta tratamientos de barba y peinados, estamos aquí para hacer que tu visión se convierta en realidad. ¡Únete a nosotros y descubre la artesanía que nos define. ¡Tu estilo, nuestra pasión!</p>
                </div>
                <div className="Descripcion">
                    <h2>cBienvenidos a "Nombre de la Barbería" - Tu estilo, nuestro arte</h2><br />
                    <p>En "Nombre de la Barbería", donde la elegancia se encuentra con la precisión. Nuestro equipo de barberos altamente capacitados y apasionados está listo para brindarte un servicio excepcional en cada visita. Desde cortes de cabello hasta tratamientos de barba y peinados, estamos aquí para hacer que tu visión se convierta en realidad. ¡Únete a nosotros y descubre la artesanía que nos define. ¡Tu estilo, nuestra pasión!</p>
                </div>
            </div>
            <div>
            
                <input type='date' value={fechaCita} onChange={(e) => {setFechaCita(e.target.value);}}/>
                {fechaCita}{/*muestra la fecha pa probar */}
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
