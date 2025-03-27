import React from "react";
import { MdPerson } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import './index.css';

export const NavBar = () => {
    return(
    <nav>
        <span>BARBER SHOP</span>
        <ul className="nave">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Ubicacion</a></li>
            <li><a href="/contact">Barberos</a></li>
            <li><a href="/contact">Servicios</a></li>
            <li><a href="/contact">Galeria</a></li>
            <li><a href="/contact">Contacto</a></li>
        </ul>
        <div className="user">
            <MdPerson />
            <button>REGISTRARSE</button>
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