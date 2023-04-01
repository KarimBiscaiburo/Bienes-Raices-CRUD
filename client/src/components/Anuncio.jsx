import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Imagenes
import icono_wc from "../img/icono_wc.svg";
import icono_estacionamiento from "../img/icono_estacionamiento.svg";
import icono_dormitorio from "../img/icono_dormitorio.svg";

const imgPropiedad = require.context("../img", true);

function Anuncio ( { numero, imgAnuncio, titulo, descripcion, precio, wc, estacionamientos, habitaciones } ) {

    const resumenDesc = descripcion.split(".");
    const precioSeparado = precio.split(".");
    let entero = precioSeparado[0].split("");
    const decimal = precioSeparado[1];
    
    
    if (entero.length === 4) {
        entero.splice(1, 0, ".");
    } else if (entero.length === 5) {
        entero.splice(2, 0, ".");
    } else if (entero.length === 6) {
        entero.splice(3, 0, ".");
    } else if (entero.length === 7) {
        entero.splice(1, 0, ".");
        entero.splice(5, 0, ".");
    }

    entero.push(",", decimal);
    const precioTotal = entero.join("");

    return (
        <Fragment>
            <div className="anuncio" key={numero}>
                <img loading="lazy" src={ imgPropiedad(`./${imgAnuncio}`) } alt="anuncio" />

                <div className="contenedor-anuncio">
                    <h3>{titulo}</h3>
                    <p>{resumenDesc[0]}</p>

                    <div>
                        <p className="precio">${precioTotal}</p>
                        <ul className="iconos-caracteristicas">
                            <li>
                                <img className="icono" loading="lazy" src={icono_wc} alt="icono wc" />
                                <p>{wc}</p>
                            </li>
                            <li>
                                <img className="icono" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento" />
                                <p>{estacionamientos}</p>
                            </li>
                            <li>
                                <img className="icono" loading="lazy" src={icono_dormitorio} alt="icono dormitorio" />
                                <p>{habitaciones}</p>
                            </li>
                        </ul>
                        
                        <Link to={`/detalle-anuncio/${numero}`} className="boton-amarillo-block">
                            Ver Propiedad
                        </Link>
                    </div>
                </div>
            </div> 
        </Fragment>
    )
}

export default Anuncio;