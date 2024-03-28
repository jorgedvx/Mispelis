import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const[busqueda, setBusqueda] = useState('');
    const[noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e)=>{

        //Crear estado y actualizarlo
        setBusqueda(e.target.value);

        //Filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli =>{
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        });

        if(busqueda.length <= 1  || pelis_encontradas <= 0){
            pelis_encontradas =JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true)
        }else{
            setNoEncontrado(false);
        }

        


        //Actualizar estado del lestado principal con lo que logrado filtrar
        setListadoState(pelis_encontradas);




        //Comprobar si hay resultados

        //Dar valor de todo en localStorage

        
    }


    return (
        <div className="search">
            <h1 className="title">Buscador: {busqueda}</h1>
            {(noEncontrado == true && busqueda.length > 1) && (
                 <span className='no-encontrado'> No se ha econtrado ninguna coincidencia</span>

            )}
    
            <form >
                <input type="text"
                       name="busqueda"
                       autoComplete='off'
                       value={busqueda}
                       onChange={buscarPeli} />

                <button id='search'>Buscar</button>
            </form>
        </div>

    )
}
