import React, { Fragment} from "react";
import Header from "./Header";

// Imagenes
import destacada3 from "../img/destacada3.jpg"
import Footer from "./Footer";

function Contacto () {

    return(
        <Fragment>
            <Header />
            
            <main> 
                <h1>Contacto</h1>

                <div className="contenedor">
                    <img loading="lazy" src={destacada3} alt="imagen contacto" />

                    <h2>Llene el formulario de contacto</h2>

                    <form className="formulario" action="">
                        <fieldset>
                            <legend>Informacion Personal</legend>

                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" placeholder="Tu nombre" id="nombre"/>

                            <label htmlFor="email">E-mail</label>
                            <input type="email" placeholder="Tu email" id="email"/>

                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" placeholder="Tu telefono" id="telefono"/>

                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea id="mensaje"></textarea>
                        </fieldset>

                        <fieldset>
                            <legend>Informacion sobre la Propiedad</legend>

                            <label htmlFor="vende-compra"><span>Vende o Compra</span></label>
                            <select id="vende-compra">
                                <option value="" disabled selected>- Seleccione -</option>
                                <option value="Vende">Vende</option>
                                <option value="Compra">Compra</option>
                            </select>

                            <label htmlFor="presupuesto">Precio o Presupuesto</label>
                            <input type="number" placeholder="Precio o Presupuesto" id="presupuesto"/>
                        </fieldset>

                        <fieldset>
                            <legend>Contacto</legend>

                            <p>Como desea ser contactado</p>

                            <div className="forma-contacto">
                                <label htmlFor="contactar-telefono">Telefono</label>
                                <input name="contacto" type="radio" value="telefono" id="contactar-telefono"/>

                                <label htmlFor="contactar-email">E-mail</label>
                                <input name="contacto" type="radio" value="email" id="contactar-email"/>
                            </div>

                            <p>Si eligio telefono, elija la fecha y hora para ser contactado</p>

                            <label htmlFor="fecha">Fecha</label>
                            <input type="date" id="fecha"/>

                            <label htmlFor="hora">Hora</label>
                            <input type="time" id="hora" min="09:00" max="18:00"/>
                        </fieldset>

                        <input type="submit" value="Enviar" className="boton-verde" />
                        
                    </form>
                </div>     
            </main>

            <Footer />
        </Fragment>
    ) 
}

export default Contacto;