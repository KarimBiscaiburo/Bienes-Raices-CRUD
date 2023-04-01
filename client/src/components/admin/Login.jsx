import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import { obtenerUsuarioPeticion } from "../../api/peticiones";

import bcrypt from "bcryptjs";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../../features/authentication/authentication.js";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function comparar(password, hash) {
        const comparado = await bcrypt.compare(password, hash).then( res => {
           return res;
        })
        return comparado;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const usuario = { email, password };

        if(email === "" || password === "") {
            mostrarAlerta("error", "Todos los campos son obligatorios");
            return;
        }

        const resultado = await obtenerUsuarioPeticion(usuario);
        const isAuth = await comparar( password, resultado[0].password);

        if(isAuth) {
            dispatch( LOG_IN() );
            navigate("/admin");
        } else {
            mostrarAlerta("error", "El email o contraseña no coincide");
        }
    };

    function mostrarAlerta(isError, mensaje) {
        const divAlerta = document.createElement("DIV");
        if(isError) {
            divAlerta.classList.add("alerta", isError);
        } else {
            divAlerta.classList.add("alerta");
        }
        
        divAlerta.textContent = mensaje;

        const formularioLogin = document.querySelector("#formulario-login");
        formularioLogin.appendChild(divAlerta);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }

    return (
        <Fragment>
            <Header />

                <main className="contenedor seccion contenido-centrado">
                    <h1>Iniciar Sesion</h1>

                    <form className="formulario" id="formulario-login" onSubmit={handleSubmit}>
                        <fieldset>
                                <legend>Email y Password</legend>

                                <label htmlFor="email">E-mail</label>
                                <input type="email" placeholder="Tu email" id="email"/>

                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Tu password" id="password"/>
                            </fieldset>

                            <input type="submit" value="Inicias Sesión" className="boton boton-verde"/>
                    </form>
                </main>

            <Footer />
        </Fragment>
    );
}

export default Login;