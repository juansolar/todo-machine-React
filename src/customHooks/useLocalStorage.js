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

  //Actualizar la información en localStorage y en el estado
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

export {useLocalStorage}