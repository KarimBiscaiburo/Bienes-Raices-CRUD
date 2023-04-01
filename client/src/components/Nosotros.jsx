import React, { Fragment } from "react";

//Componentes
import Header from "./Header";
import Iconos from "./Iconos";

//Imagenes
import imgNosotros from "../img/nosotros.jpg";
import Footer from "./Footer";

function Nosotros () {

    return(
        <Fragment>
            <Header/>

            <main>
                <h1>Conoce Sobre Nosotros</h1>

                <div className="contenedor contenido-nosotros">
                    <img loading="lazy" src={imgNosotros} alt="Sobre Nosotros" />

                    <div className="texto-nosotros">
                        <blockquote>25 años de Experiencia</blockquote>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia eaque vitae placeat eius consequatur consequuntur, saepe quas adipisci fugit dolor, perspiciatis, modi impedit. Architecto nostrum cum commodi sit. Fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia eaque vitae placeat eius consequatur consequuntur, saepe quas adipisci fugit dolor, perspiciatis, modi impedit. Architecto nostrum cum commodi sit. Fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia eaque vitae placeat eius consequatur consequuntur, saepe quas adipisci fugit dolor, perspiciatis, modi impedit. Architecto nostrum cum commodi sit. Fuga?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, temporibus cumque modi quam sequi cum, illum consectetur impedit, eveniet omnis itaque voluptatum quibusdam incidunt soluta labore perferendis repellat natus?</p>
                    </div>
                </div>

                <Iconos />
            </main>

            <Footer />
        </Fragment>

    ) 
}

export default Nosotros;