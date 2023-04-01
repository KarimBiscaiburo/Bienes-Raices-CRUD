import React, { Fragment, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

//Componentes JSX
import Footer from "../Footer";
import Header from "../Header";

//Funciones backend
import { crearPeticion, obtenerVendedoresPeticion } from "../../api/peticiones";

function Crear() {

    const [vendedores, setVendedores] = useState([]);
    const navigate = useNavigate();

    //Este useEffect utilizado de esta manera se ejecuta cada vez que se renderiza la pagina
    useEffect(() => {

        async function cargarVendedores() {
            const respuesta = await obtenerVendedoresPeticion();
            setVendedores(respuesta);
        }
        cargarVendedores();

    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const hoy = new Date();
        const dia = hoy.getDate();
        const mes = hoy.getMonth() + 1;
        const anio = hoy.getFullYear();

        const inputTitulo = document.querySelector("#titulo").value;
        const inputPrecio = document.querySelector("#precio").value;
        const inputImagen = document.querySelector("#imagen").files[0];
        const inputDescripcion = document.querySelector("#descripcion").value;
        const inputHabitaciones = document.querySelector("#habitaciones").value;
        const inputWc = document.querySelector("#wc").value;
        const inputEstacionamientos = document.querySelector("#estacionamientos").value;
        const inputVendedoresId = document.querySelector("#vendedores_id").value;

        if( !inputTitulo || !inputPrecio || !inputImagen || inputDescripcion.length < 50 || !inputHabitaciones || !inputWc || !inputEstacionamientos ){
            mostrarAlerta("error", "Todos los campos son obligatorios y la descripcion debe tener al menos 50 caracteres");
            return;
        }

        const dataForm = new FormData();

        dataForm.append("titulo", inputTitulo);
        dataForm.append("precio", inputPrecio);
        dataForm.append("imagen", inputImagen);
        dataForm.append("descripcion", inputDescripcion);
        dataForm.append("habitaciones", inputHabitaciones);
        dataForm.append("wc", inputWc);
        dataForm.append("estacionamientos", inputEstacionamientos);
        dataForm.append("creado", `${anio}-${mes}-${dia}`);
        dataForm.append("vendedores_id", inputVendedoresId);

        crearPeticion(dataForm);
       
        navigate("/admin?env=1");
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
    
    return (
        <Fragment>
            <Header />

            <main className="contenedor seccion">
                <h1>CREAR</h1>

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
                            placeholder="Titulo Propiedad" 
                        />

                        <label htmlFor="precio">Precio:</label>
                        <input 
                            type="number" 
                            id="precio" 
                            name="precio" 
                            placeholder="Precio Propiedad" 
                        />

                        <label htmlFor="imagen">Imagen:</label>
                        <input 
                            type="file" 
                            id="imagen" 
                            name="imagen" 
                            accept="image/jpg, image/png" 
                        />

                        <label htmlFor="descripcion">Descripcion</label>
                        <textarea 
                            id="descripcion" 
                            name="descripcion" 
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
                            placeholder="Ej: 3" 
                            min="1"
                        />

                        <label htmlFor="wc">Baños:</label>
                        <input 
                            type="number" 
                            id="wc" 
                            name="wc" 
                            placeholder="Ej: 3" 
                            min="1"
                        />

                        <label htmlFor="estacionamientos">Estacionamientos:</label>
                        <input 
                            type="number" 
                            id="estacionamientos" 
                            name="estacionamientos" 
                            placeholder="Ej: 3" 
                            min="1"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Vendedor</legend>

                        <select id="vendedores_id">
                            <option disabled selected>- Seleccione -</option>
                            { 
                                vendedores?.map( vendedor => {
                                    return <option value={vendedor.id} key={vendedor.id} name="vendedores_id">{vendedor.nombre}</option>
                                })   
                            }

                        </select>
                    </fieldset>

                    <input type="submit" value="Crear Propiedad" className="boton boton-verde" />
                </form>

                <Link to="/admin" className="boton boton-verde">Volver</Link>
            </main>

            <Footer />
        </Fragment>
    );
}

export default Crear;