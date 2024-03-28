export const guardarEnStorage = (clave, elemento) =>{

    //Conseguir los elementos que ya tenemos en el local storage

    let elementos = JSON.parse(localStorage.getItem(clave));

    //Comprobar si es array
    if(Array.isArray(elementos)){
        //Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con la peli nueva
        elementos = [elemento]
    }

    //Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devoler objeto guardado
    return elemento;
}
