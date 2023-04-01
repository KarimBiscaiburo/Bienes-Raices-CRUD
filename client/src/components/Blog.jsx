import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Componentes JSX
import Footer from "./Footer";
import Header from "./Header";

// Imagenes
import blog1 from "../img/blog1.jpg";
import blog2 from "../img/blog2.jpg";
import blog3 from "../img/blog3.jpg";
import blog4 from "../img/blog4.jpg";

function Blog () {

    return(
        <Fragment>
            <Header />

            <main className="contenedor seccion contenido-centrado">
                <h1>Nuestro Blog</h1>

                <article className="entrada-blog">
                        <img loading="lazy" src={blog1} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada" className="entrada">
                                <h4>Terraza en el techo de tu casa</h4>
                                <p>Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p>Consejos para contruir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero</p>
                            </Link>
                        </div>
                </article>
                <article className="entrada-blog">
                        <img loading="lazy" src={blog2} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada" className="entrada">
                                <h4>Terraza en el techo de tu casa</h4>
                                <p>Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p>Consejos para contruir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero</p>
                            </Link>
                        </div>
                </article>
                <article className="entrada-blog">
                        <img loading="lazy" src={blog3} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada" className="entrada">
                                <h4>Terraza en el techo de tu casa</h4>
                                <p>Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p>Consejos para contruir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero</p>
                            </Link>
                        </div>
                </article>
                <article className="entrada-blog">
                        <img loading="lazy" src={blog4} alt="Texto entrada blog" />

                        <div className="texto-entrada">
                            <Link to="/entrada" className="entrada">
                                <h4>Terraza en el techo de tu casa</h4>
                                <p>Escrito en: <span>20/10/2022</span> por: <span>Admin</span></p>

                                <p>Consejos para contruir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero</p>
                            </Link>
                        </div>
                </article>
            </main>

            <Footer />
        </Fragment>
    ) 
}

export default Blog;