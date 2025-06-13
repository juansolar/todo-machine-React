import { useState } from "react";

function useLocalStorage(itemName, initialValue) {

  const localStorageItems = localStorage.getItem(itemName);
  let parsedItems;

  if(!localStorageItems){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItems = [];
  }else{
    parsedItems = JSON.parse(localStorageItems);
  }

  const [item, setItem] = useState(parsedItems); //Estado inicial

  //Actualizar la información en localStorage y en el estado
  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  }

  return [item, saveItems];
}

export {useLocalStorage}