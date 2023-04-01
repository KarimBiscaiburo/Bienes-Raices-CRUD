import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { obtenerPropiedadPeticion, obtenerVendedoresPeticion, actualizarPeticion } from "../../api/peticiones";

//Componentes JSX
import Footer from "../Footer";
import Header from "../Header";

const imgPropiedad = require.context("../../img", true); 

function Actualizar() {

    const valores = window.location.search;
    const idProp = new URLSearchParams(valores).get("id");
    const navigate = useNavigate();

    const [loader, setLoader] = useState(true);
    const [propiedad, setPropiedad] = useState();
    const [vendedores, setVendedores] = useState([]);

    useEffect(() => {

        async function cargarPropiedades() {
            const respuesta = await obtenerPropiedadPeticion(idProp);
            setPropiedad(respuesta);
            setLoader(false);
        }
        cargarPropiedades();

        async function cargarVendedores() {
            const respuesta = await obtenerVendedoresPeticion();
            setVendedores(respuesta);
        }
        cargarVendedores();

    }, [idProp]);   

    async function handleSubmit(e) {
        e.preventDefault()
        let dataForm;

        const inputTitulo = document.querySelector("#titulo").value;
        const inputPrecio = document.querySelector("#precio").value;
        const inputImagen = document.querySelector("#imagen").files[0];
        const inputDescripcion = document.querySelector("#descripcion").value;
        const inputHabitaciones = document.querySelector("#habitaciones").value;
        const inputWc = document.querySelector("#wc").value;
        const inputEstacionamientos = document.querySelector("#estacionamientos").value;
        const inputVendedoresId = document.querySelector("#vendedores_id").value;

        if( !inputTitulo || !inputPrecio || inputDescripcion.length < 50 || !inputHabitaciones || !inputWc || !inputEstacionamientos ){
            mostrarAlerta("error", "Todos los campos son obligatorios y la descripcion debe tener al menos 50 caracteres");
            return;
        }

        dataForm = new FormData();

        const hoy = new Date();
        const dia = hoy.getDate();
        const mes = hoy.getMonth() + 1;
        const anio = hoy.getFullYear();

        dataForm.append("titulo", inputTitulo);
        dataForm.append("precio", inputPrecio);
        dataForm.append("descripcion", inputDescripcion);
        dataForm.append("habitaciones", inputHabitaciones);
        dataForm.append("wc", inputWc);
        dataForm.append("estacionamientos", inputEstacionamientos);
        dataForm.append("creado", `${anio}-${mes}-${dia}`);
        dataForm.append("vendedores_id", inputVendedoresId);
        dataForm.append("refImg", propiedad.imagen );

        if (inputImagen) {
            dataForm.append("imagen", inputImagen);
        
        } else {
            dataForm.append("imagen", propiedad.imagen);    
        }


        await actualizarPeticion(dataForm, idProp);
       
        navigate("/admin?act=1");
    }

    function mostrarAlerta(isError, mensaje) {
        const divAlerta = document.createElement("DIV");
        if(isError) {
            divAlerta.classList.add("alerta", isError);
        } else {
            divAlerta.classList.add("alerta");
        }
        
        divAlerta.textContent = mensaje;

        const formularioCrear = document.querySelector("#formulario-crear");
        formularioCrear.appendChild(divAlerta);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }
    
    return(
        <Fragment>

            <Header />

            { loader? <p>Cargando...</p> :

            <main className="contenedor seccion">
                <h1>ACTUALIZAR</h1>

                <form 
                    className="formulario" 
                    id="formulario-crear" 
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <fieldset>
                        <legend>Informacion General</legend>

                        <label htmlFor="titulo">Titulo:</label>
                        <input 
                            type="text" 
                            id="titulo"
                            name="titulo" 
                            defaultValue={propiedad.titulo}
                        />

                        <label htmlFor="precio">Precio:</label>
                        <input 
                            type="number" 
                            id="precio" 
                            name="precio" 
                            defaultValue={propiedad.precio}
                        />

                        <label htmlFor="imagen">Imagen:</label>
                        <input 
                            type="file" 
                            id="imagen" 
                            name="imagen" 
                            accept="image/jpeg, image/png"
                        />

                        <img 
                            src={ imgPropiedad(`./${propiedad.imagen}`) } 
                            alt="Propiedad" 
                            className="imagen-small"
                        />

                        <label htmlFor="descripcion">Descripcion</label>
                        <textarea 
                            id="descripcion" 
                            name="descripcion" 
                            defaultValue={propiedad.descripcion}
                        >
                        </textarea>
                    </fieldset>

                    <fieldset>
                        <legend>Informacion Propiedad</legend>

                        <label htmlFor="habitaciones">Habitaciones:</label>
                        <input 
                            type="number" 
                            id="habitaciones" 
                            name="habitaciones"  
                            min="1"
                            defaultValue={propiedad.habitaciones}
                        />

                        <label htmlFor="wc">Baños:</label>
                        <input 
                            type="number" 
                            id="wc" 
                            name="wc" 
                            min="1"
                            defaultValue={propiedad.wc}
                        />

                        <label htmlFor="estacionamientos">Estacionamientos:</label>
                        <input 
                            type="number" 
                            id="estacionamientos" 
                            name="estacionamientos"
                            min="1"
                            defaultValue={propiedad.estacionamientos}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Vendedor</legend>

                        <select id="vendedores_id">
                            { 
                                vendedores?.map( vendedor => {
                                    return <option 
                                            value={vendedor.id} 
                                            key={vendedor.id} 
                                            name="vendedores_id" 
                                            selected={vendedor.id === propiedad.vendedores_id}
                                           >{vendedor.nombre}</option>
                                })   
                            }

                        </select>
                    </fieldset>

                    <input type="submit" value="Actualizar Propiedad" className="boton boton-verde" />
                </form>

                <Link to="/admin" className="boton boton-verde">Volver</Link>
            </main>

            }

            <Footer />
        </Fragment>
    );
}

export default Actualizar;