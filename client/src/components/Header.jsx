import React from "react";
import Navegacion from "./Navegacion";
import { Link } from "react-router-dom";

// Imagenes
import barras from "../img/barras.svg";
import dark_mode from "../img/dark-mode.svg";

function Header( {clase, titulo} ) {

    function abrirMenu() {
        const navegacion = document.querySelector(".navegacion");
        navegacion.classList.toggle("mostrar");
    }

    function darkMode() {
        document.body.classList.toggle("dark-mode");
    }

    return(
        <header className={"header " + clase } >
            <div className="contenedor contenido-header">
                <div className="barra">
                    <Link to="/" className="logo">BIENES<span>RAICES</span></Link>

                    <div onClick={abrirMenu} className="mobile-menu">
                        <img src={barras} alt="icono menu responsivo" />
                    </div>
                    <div className="derecha">
                        <img onClick={darkMode} className="dark-mode-boton" src={dark_mode} alt="" />
                        <Navegacion />
                    </div>
                </div>

                {titulo ? <h1>{titulo}</h1> : null}
            </div>
        </header>
    )
}

export default Header;