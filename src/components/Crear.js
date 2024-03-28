import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponent = "añadir pelicula";
    //Desestructuracion de array /no de objetos
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion:''
    });

    const{titulo, descripcion} = peliState;

    const conseguirDatosForm = e =>{
        e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Crear objeto de la pelicula

        let peli = {
            id: new Date().getTime(), //forev id diferent / fecha actual
            titulo,
            descripcion
        }
         
        // Guardar estado
        setPeliState(peli)

        //Actualizar el estado del estado principal      
        setListadoState(elementos =>{
            return[peli, ...elementos];
        });

        // Guardar en el almacenamiento de Local
        guardarEnStorage("pelis", peli);

        //Actualizar datos

        
        
    }



    return (
        <div className="add">
            <h3 className="title">{tituloComponent}</h3> 

            <strong>
            {(titulo && descripcion) && "Has creado la pelicula "+ titulo}          
            </strong>                  

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                        id="titulo"
                        name="titulo" 
                        placeholder="Titulo" />
                <textarea 
                        id="descripcion"
                        name="descripcion"
                        placeholder="Description"></textarea>
                <input type="submit" 
                       id="save"
                       value="Guardar" />
            </form>
        </div>
    )
}
