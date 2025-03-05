import React from 'react';

/* Custom Hook encargada del localStorage */
function useLocalStorage(itemName, initialValue) { 
  /* Se obtiene los TODOs desde el localStorage */
  const lS_Item = localStorage.getItem(itemName);
  let parsedItem;
  
  /* Verifica si existe un contenido en localStorage si no, crea la variable en un arreglo vacio */
  if (!lS_Item) {
    /* Importante que para crear contenido en el localStorage debe guardarse este en String */
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue;
  } else{
    /* El contenido del localStorage lo convierte en Objeto o este caso, un arreglo de objetos para la manipulacion de este en el codigo */
    parsedItem = JSON.parse(lS_Item);
  }
  
  /*  */
  const [item, setItem] = React.useState(parsedItem);

  /* Esta funcion guarda los cambios de los TODOs en el estado y en el localStorage */
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  };

  return [item, saveItem];
}

export {useLocalStorage};