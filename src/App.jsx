import React, {useState,useEffect} from 'react'
import { MdPerson } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import './Navbar.css';
import './App.css' ;
import {NavBar} from "./navBar.jsx";


export function App () {
    const [fechaCita, setFechaCita] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex1, setCurrentIndex2] = useState(0);
    const descriptions = [
        "Más que una barbería, somos un espacio donde la tradición se encuentra con la modernidad. Aquí, cada corte y cada afeitado es una obra maestra, diseñada para resaltar tu personalidad y hacerte sentir impecable. Nuestro equipo de expertos barberos, apasionados por su oficio, te brindará una experiencia única y personalizada. ¡Ven y descubre el arte de la barbería!",
        'Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades de cuidado personal. Desde cortes 1  de cabello clásicos y modernos hasta afeitados tradicionales con toalla caliente, arreglo y diseño de barba, tratamientos capilares, coloración de cabello y barba, cortes y diseños para niños, masajes faciales y depilación facial con cera o hilo. Nos aseguramos de utilizar productos de alta calidad y técnicas innovadoras para garantizar resultados excepcionales',
        'Nos encontramos ubicados en Lechería, Anzoátegui, Venezuela, específicamente en la Avenida Principal, Centro Comercial Plaza Mayor, Local 12, Lechería 2101, Anzoátegui, Venezuela. Nuestra barbería está situada en el corazón de Lechería, dentro del reconocido Centro Comercial Plaza Mayor, lo que facilita el acceso desde la Avenida Principal y ofrece estacionamiento disponible para nuestros clientes. Además, estamos rodeados de restaurantes, tiendas y otros servicios, lo que te permite combinar tu visita a la barbería con otras actividades. Nuestro ambiente es moderno y acogedor, con una decoración inspirada en las barberías clásicas y toques contemporáneos, y contamos con equipamiento de última generación para brindarte un servicio excepcional.'
    ]
    const barbeOps = [
        'Bienvenidos a "Nombre de la Barbería" - Tu estilo, nuestro arte',
        'Servicios que ofrecemos',
        'Nuestra ubicacion'
    
    ]
    useEffect(() => { //FUNCION QUE CALCULA TIEMPO ENTRE CAMBIO DE TEXTOS
        const interval = setInterval(() => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % descriptions.length)
        }, 3000)
        return () => clearInterval(interval) }, [])

    useEffect(() => { //FUNCION QUE CALCULA TIEMPO ENTRE CAMBIO DE TEXTOS
            const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % barbeOps.length)
            }, 3000)
            return () => clearInterval(interval) }, [])
    
    return(
        <div>
            {/* NavBar componente */}
            <NavBar />
            <br/><br/><br/><br/>
            <section>
           <div className="contenedor">{/*CONTENEDOR PRINCIPAL por si se agg mas datos*/}
                <div className="Descripcion1">
                    <h2 className='info1'>{barbeOps[currentIndex1]}</h2>
                    <p className='info2'>{descriptions[currentIndex]}</p>
                </div>
                <img src='https://institutonoa.com.ar/wp-content/uploads/2021/10/barberia_.jpg' id="imagen"></img>
                <circle id="circulo"></circle>
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
