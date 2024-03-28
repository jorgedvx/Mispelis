import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Lista } from "./components/Lista";


function App() {

 const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/* CABECERA  */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/* Barra de navegacion  */}

        <nav className="nav">
            <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
            </ul>
        </nav>


        {/*  Contenido principal  */}

        <section className="content">
            {/*  Aqui va el listado de peliculas  */}

            <Lista listadoState={listadoState} setListadoState={setListadoState} />


        </section>

        {/*  Barra lateral  */}

        <aside className="lateral">

            {/* Buscador y Crear */}

            <Buscador  listadoState={listadoState} setListadoState={setListadoState}/>

             <Crear setListadoState={setListadoState}/>
        </aside>

        {/*  Pie de pagina  */}
        <footer className="footer">
            &copy; Aplicativo MisPelis <a href="http://jorgelopezweb.es">http://jorgelopezweb.es</a>
        </footer>
    </div>

  );
}

export default App;
