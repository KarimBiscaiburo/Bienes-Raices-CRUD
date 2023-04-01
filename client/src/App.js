import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";

// Componentes JSX
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Anuncios from "./components/Anuncios";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import DetalleAnuncio from "./components/DetalleAnuncio";
import Error from "./components/Error";
import Protected from "./components/Protected";

//Componentes JSX ADMIN
import AdminInicio from "./components/admin/AdminInicio";
import Crear from "./components/admin/Crear";
import Actualizar from "./components/admin/Actualizar";
import Eliminar from "./components/admin/Eliminar";
import Login from "./components/admin/Login";
import Entrada from "./components/Entrada";

function App() {
  const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  
  function verificarDarkMode() {
    if(prefiereDarkMode.matches){
      document.body.classList.add("dark-mode");
    }

    prefiereDarkMode.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
    })
  }

  return (
    <div className="App" onLoad={verificarDarkMode}>
      <Routes>
        
        {/* RUTAS PUBLICAS */}
        <Route path="/" element={ <Inicio />} />
        <Route path="/nosotros" element={ <Nosotros />} />
        <Route path="/anuncios" element={ <Anuncios />} />
        <Route path="/detalle-anuncio/:id" element={ <DetalleAnuncio />} />
        <Route path="/blog" element={ <Blog />} />
        <Route path="/entrada" element={ <Entrada />} />
        <Route path="/contacto" element={ <Contacto />} />

        {/* RUTAS DE ACCESO ADMINISTRATIVO */}
        <Route path="/login" element={ <Login /> } />
        <Route element={ <Protected />} >
          <Route path="/admin" element={ <AdminInicio /> } />
          <Route path="/admin/crear" element={ <Crear /> } />
          <Route path="/admin/actualizar" element={ <Actualizar /> } />
          <Route path="/admin/eliminar" element={ <Eliminar /> } />
        </Route>
        
        {/* RUTA NO ENCONTRADA */}
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
