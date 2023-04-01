import React, { Fragment } from "react";

//Imagenes
import icono1 from "../img/icono1.svg";
import icono2 from "../img/icono2.svg";
import icono3 from "../img/icono3.svg";

function Iconos () {

    return(
        <Fragment>
            <h2>Más sobre nosotros</h2>

            <div className="iconos-nosotros">
                <div className="icono">
                    <img src={icono1} alt="icono" />
                    
                    <h3>Seguridad</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint tempora totam eligendi consequatur laboriosam dolorem praesentium voluptatem sunt fugit fugiat, ullam quae vero amet, incidunt quasi, repellendus quod inventore.</p>
                </div>
                <div className="icono">
                    <img src={icono2} alt="icono precio" />

                    <h3>Precio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint tempora totam eligendi consequatur laboriosam dolorem praesentium voluptatem sunt fugit fugiat, ullam quae vero amet, incidunt quasi, repellendus quod inventore.</p>
                </div>
                <div className="icono">
                    <img src={icono3} alt="icono a tiempo" />

                    <h3>A Tiempo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint tempora totam eligendi consequatur laboriosam dolorem praesentium voluptatem sunt fugit fugiat, ullam quae vero amet, incidunt quasi, repellendus quod inventore.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Iconos;