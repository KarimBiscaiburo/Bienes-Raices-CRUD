import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

import destacada from "../img/destacada.jpg"

function Entrada() {


    return( 
        <Fragment>
            <Header />

            <main className="contenedor seccion contenido-centrado">
                <h1>Guia para Decorar tu Casa </h1>

                <img src={destacada} alt="Casa en venta Frente al Bosque" />

                <p className="informacion-meta">Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                <div className="resumen-propiedad">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit, cumque aliquid tempora aut facere quae ad blanditiis molestiae architecto deserunt, eveniet dicta voluptas, quidem velit reprehenderit dignissimos! Totam, dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates ducimus, dicta quasi nulla impedit neque ipsum. Consequuntur deserunt optio ipsa nemo eum eveniet, blanditiis quam aperiam ad quisquam unde? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt quos, quo velit nam id animi repellendus explicabo nihil similique itaque accusamus est, ex omnis quisquam quod, autem voluptatibus delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem est necessitatibus saepe delectus sapiente illo voluptatem error maxime? Velit, debitis illum? Nisi alias fugit magnam quos aspernatur maxime sapiente accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at omnis totam, magnam officia pariatur accusamus? Obcaecati ipsum nulla eius cumque voluptatum expedita quis ullam unde, iste beatae, similique recusandae?
                    </p>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
}

export default Entrada;