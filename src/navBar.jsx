import React from "react";
import { MdPerson } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import './Navbar.css';

export const NavBar = () => {
    return(
    <nav>
        <span className="Titulo">BARBER SHOP</span>
        <ul className="nave">
            <li><a className="no-style" href="/">Inicio</a></li>
            <li><a className="no-style" href="/Ubicacion">Ubicacion</a></li>
            <li><a className="no-style" href="/Barberos">Barberos</a></li>
            <li><a className="no-style" href="/Servicios">Servicios</a></li>
            <li><a className="no-style" href="/Galeria">Galeria</a></li>
            <li><a className="no-style" href="/Contacto">Contacto</a></li>
        </ul>
        <div className="user">
            <MdPerson />
            <button id="regBut" onClick={() => window.location.href="/Registro"}>REGISTRARSE</button>
        </div>
        <div className="redes">
            <button onClick={() => window.location.href="https://Facebook"} className="fc-button">
                <FaFacebook />
            </button>
            <button onClick={() => window.location.href="https://Twitter"}>
                <FaXTwitter />
            </button>
            <button onClick={() => window.location.href="https://instagram"}>
                <RiInstagramFill />
            </button>
        </div>
    </nav>
    )
}