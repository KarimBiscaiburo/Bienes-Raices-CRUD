import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { eliminarPeticion, obtenerPropiedadesPeticion, obtenerPropiedadPeticion } from "../../api/peticiones";

//Componentes JSX
import Footer from "../Footer";
import Header from "../Header";

//Imagenes
//Asi se pueden extraer imagenes del back de manera dinamica
const imgPropiedad = require.context("../../img", true); 

function AdminInicio() {

    const [propiedades, setPropiedades] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        async function cargarPropiedades() {
            const respuesta = await obtenerPropiedadesPeticion();
            setPropiedades(respuesta);
        }
        cargarPropiedades();

    }, [propiedades]);

    const valores = window.location.search;
    const creado = new URLSearchParams(valores).get("env") ?? null;
    const actualizado = new URLSearchParams(valores).get("act") ?? null;
    const eliminado = new URLSearchParams(valores).get("del") ?? null;

    async function handleDelete(e) {
        const respuesta = window.confirm("Esta seguro de eliminar esta propiedad?");
        if(!respuesta) {
            return;
        }
        
        const input = e.target 
        const id = input.getAttribute("refid");

        const propiedad = await obtenerPropiedadPeticion(id)

        eliminarPeticion(id, propiedad);
        navigate("/admin?del=1");
    }
    
    return(
        <Fragment>
            <Header />

            <main className="contenedor seccion">
                <h1>ADMIN</h1>

                { creado === "1" ? <p className="alerta exito">Propiedad creada con exito</p> : null }
                { actualizado === "1" ? <p className="alerta exito">Propiedad actualizada con exito</p> : null }
                { eliminado === "1" ? <p className="alerta exito">Propiedad eliminada con exito</p> : null }
                
                <Link to="/admin/crear" className="boton boton-verde">Crear Propiedad</Link>

                <table className="propiedades">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Accion</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            //Antes de hacer el .map evalua si el arreglo contiene algo con el "?"
                            propiedades?.map( propiedad => {
                                return <tr key={propiedad.id}>
                                    <td>{propiedad.id}</td>
                                    <td>{propiedad.titulo}</td>
                                    <td><img className="imagen-tabla" src={ imgPropiedad(`./${propiedad.imagen}`) } alt="Propiedad" /></td>
                                    <td>${propiedad.precio}</td>
                                    <td>
                                        <button onClick={handleDelete} refid={propiedad.id} className="boton-rojo-block boton-eliminar">Eliminar</button>
                                        <Link to={`/admin/actualizar?id=${propiedad.id}`} className="boton-amarillo-block">Actualizar</Link>
                                    </td>
                                </tr>
                            })
                        }                      
                    </tbody>
                </table>
            </main>

            <Footer />
        </Fragment>
    );
}

export default AdminInicio;