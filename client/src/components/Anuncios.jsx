import React, { Fragment, useState, useEffect } from "react";
import { obtenerPropiedadesPeticion } from "../api/peticiones";

//Componentes
import Header from "./Header";
import Anuncio from "./Anuncio";

//imagenes
import Footer from "./Footer";

function Anuncios () {

    const [propiedades, setPropiedades] = useState();

    useEffect( () => {

        async function cargarPropiedades () {
            const resultado = await obtenerPropiedadesPeticion()
            setPropiedades(resultado);
        } 
        cargarPropiedades();
    } ,[]);

    return(
        <Fragment>
            <Header />
            
            <main className="seccion contenedor">
                <h2>Casas y Departamentos en Venta</h2>

                <div className="contenedor-anuncios">
                    { propiedades?.map( propiedad => {
                        return <Anuncio 
                        numero = {propiedad.id}
                        imgAnuncio = {propiedad.imagen}
                        titulo = {propiedad.titulo}
                        descripcion = {propiedad.descripcion}
                        precio = {propiedad.precio}
                        wc = {propiedad.wc}
                        estacionamientos = {propiedad.estacionamientos}
                        habitaciones = {propiedad.habitaciones}
                        key={propiedad.id}
                    />
                    })}
                </div>
            </main>

            <Footer />
        </Fragment>
    ) 
}

export default Anuncios;