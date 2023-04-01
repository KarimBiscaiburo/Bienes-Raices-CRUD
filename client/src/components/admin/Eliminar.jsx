import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Componentes JSX
import Footer from "../Footer";
import Header from "../Header";

function Eliminar() {
    
    return (
        <Fragment> 
            <Header />

            <main className="contenedor seccion">
                <h1>ELIMINAR</h1>

                <Link to="/admin" className="boton boton-verde">Volver</Link>
            </main>

            <Footer />
        </Fragment>
    )
}

export default Eliminar;