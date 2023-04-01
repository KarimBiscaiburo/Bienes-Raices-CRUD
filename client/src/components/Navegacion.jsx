import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navegacion() {
    const auth = useSelector( state => state.auth.login );

    return (
        <nav className="navegacion">
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/anuncios">Anuncios</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            {auth === true ? <NavLink to="/admin">Admin</NavLink> : null}
        </nav>
    )
}

export default Navegacion;