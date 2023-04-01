import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerPropiedadPeticion } from "../api/peticiones";

//COMPONENTES
import Footer from "./Footer";
import Header from "./Header";

//ICONOS
import icono_wc from "../img/icono_wc.svg";
import icono_estacionamiento from "../img/icono_estacionamiento.svg";
import icono_dormitorio from "../img/icono_dormitorio.svg";

const imgPropiedad = require.context("../img", true);

function DetalleAnuncio () {
    const  anuncio  = useParams();

    const [propiedad, setPropiedad] = useState()
    const [loader, setLoader] = useState(true);
    
    useEffect (() => {
        async function cargarPropiedad() {
            const resultado = await obtenerPropiedadPeticion(anuncio.id);
            setPropiedad(resultado);
            setLoader(false);
        }
        cargarPropiedad();
    }, [anuncio]);



    return (
        <Fragment>
            <Header />
                { loader? <p>Cargando...</p> :
                    <main className="contenedor seccion contenido-centrado">

                        <h1>{propiedad.titulo}</h1>
                    
                        <img src={ imgPropiedad(`./${propiedad.imagen}`) } alt="Detalle Propiedad" />
                    
                        <div className="resumen-propiedad">
                            <p className="precio">${propiedad.precio}</p>
                            <ul className="iconos-caracteristicas">
                                <li>
                                    <img className="icono" loading="lazy" src={icono_wc} alt="Icono wc" />
                                    <p>{propiedad.wc}</p>
                                </li>
                                <li>
                                    <img className="icono" loading="lazy" src={icono_estacionamiento} alt="Icono wc" />
                                    <p>{propiedad.estacionamientos}</p>
                                </li>
                                <li>
                                    <img className="icono" loading="lazy" src={icono_dormitorio} alt="Icono wc" />
                                    <p>{propiedad.habitaciones}</p>
                                </li>
                            </ul>

                            <p>{propiedad.descripcion}</p>
                        </div>
                

                    </main>
                }
            <Footer />
        </Fragment>
    )
}

export default DetalleAnuncio;