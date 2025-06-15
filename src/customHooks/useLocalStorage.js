import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue); //Estado inicial
  const [loading, setLoading] = useState(true);//Estado de carga
  const [error, setError] = useState(false);//Estado de error

  useEffect( () =>{
    setTimeout(() =>{
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if(!localStorageItems){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItems = [];
        }else{
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
        }
      } catch (error) {
        console.log('Ups, error: ', error);
        setError(true);
      }finally{
        setLoading(false);
      }
    },2000)

  },[]);

  //Actualizar la informaci�n en localStorage y en el estado
  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  }

  return {
    item, 
    saveItems, 
    loading, 
    error
  };
}

export {useLocalStorage};

//PARA CARGAR NUEVAMENTE LOS DATOS POR DEFECTO DE PRUEBAS

// localStorage.removeItem('defaultTodos_TODO_Machine_v1');
// const defaultTodos = [
//   {title: 'Cambiar código', description: 'Se deberá realizar un cambio de código', completed: false},
//   {title: 'Subir cambios', description: 'Tendremos que subir los cambios al repositorio', completed: true},
//   {title: 'Esperar merge', description: 'Tengo q esperar que mi compañero termine su parte del trabajo', completed: true},
//   {title: 'Alistar maleta', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
//   {title: 'tarea 2', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
//   {title: 'tarea 3', description: 'Organizar la habitación tanto para el frio como el calor de esa ciudad', completed: false},
//   {title: 'tarea 4', description: 'Organizar la casa de campo tanto para el frio como el calor de esa ciudad', completed: true},
//   {title: 'tarea 5', description: 'Organizar la maleta tanto para el frio como el calor de esa ciudad', completed: true},
//   {title: 'viajar', description: 'Viajar a Popayán', completed: true}
// ];

// localStorage.setItem('defaultTodos_TODO_Machine_v1', JSON.stringify(defaultTodos));