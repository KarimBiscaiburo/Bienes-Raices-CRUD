//Librerias
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Componentes
import Header from "./Header";
import Iconos from "./Iconos";
import Anuncio from "./Anuncio";
import Footer from "./Footer";

// Imagenes
import blog1 from "../img/blog1.jpg";
import blog2 from "../img/blog2.jpg";

//API
import { obtenerPropiedadesPeticionLimit } from "../api/peticiones";


function Inicio() {

    const [propiedades, setPropiedades] = useState();

    useEffect( () => {

        async function cargarPropiedades () {
            const resultado = await obtenerPropiedadesPeticionLimit()
            setPropiedades(resultado);
        } 
        cargarPropiedades();
    } ,[]);

    return (
        <Fragment>
            <Header clase="inicio" titulo="Venta de Casas y Departamentos Exclusivos de Lujo" />

            <main>
                <Iconos />
            </main>

            <section className="seccion contenedor">
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

                <div className="alinear-derecha">
                        <Link to="/anuncios" className="boton boton-verde">Ver Todas</Link>
                </div>
            </section>

            <section className="imagen-contacto">
                <h2>Encuentra la casa de tus sueños</h2>
                <p>Llena el formulario de contacto y un asesor se pondra en contacto contigo a la brevedad</p>
                <Link to="/contacto" className="boton-amarillo">Contactanos</Link>
            </section>

            <div className="contenedor seccion seccion-inferior">
                <section className="blog">
                    <h3>Nuestro Blog</h3>

                    <article className="entrada-blog">
                        <img loading="lazy" src={blog1} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada" className="entrada">
                                <h4>Terraza en el techo de tu casa</h4>
                                <p>Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p className="informacion-meta">Consejos para contruir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero</p>
                            </Link>
                        </div>
                    </article>

                    <article className="entrada-blog">
                        <img loading="lazy" src={blog2} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada">
                                <h4>Guia para la decoracion de tu hogar</h4>
                                <p className="informacion-meta">Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
                            </Link>
                        </div>
                    </article>
                </section>

                <section className="testimoniales">
                    <h3>Testimoniales</h3>

                    <div className="testimonial">
                        <blockquote>
                            El personal se comporto de una excelente forma, muy buena atencion y la casa que me ofrecieron cumple todas mis expectativas.
                        </blockquote>
                        <p>- Karim Biscaiburo</p>
                    </div>
                </section>
            </div>

            <Footer />

        </Fragment>
    )
}

export default Inicio;