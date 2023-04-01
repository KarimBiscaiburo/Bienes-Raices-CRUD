import React from "react";
import Navegacion from "./Navegacion";

function Footer() {
    const anio = new Date().getFullYear();

    return (
        <footer className="footer seccion">
            <div className="contenedor contenedor-footer">
                <Navegacion />
            </div>

            <p className="copyright">Todos los derechos reservados {anio} &copy;</p>
        </footer>
    )
}

export default Footer;