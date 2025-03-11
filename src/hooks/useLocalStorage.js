import React from 'react';

/* Custom Hook encargada del localStorage */
function useLocalStorage(itemName, initialValue) { 

  /*Este va ser el nuevo estado donde se guardaran los nuevos datos*/
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);
  
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(()=> {
      try {
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
        
        setItem(parsedItem);
        setLoading(false);
        
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  
  

  /* Esta funcion guarda los cambios de los TODOs en el estado y en el localStorage */
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  };

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export {useLocalStorage};

/* const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar el Curso de Intro a React.js", completed: false},
  {text: "Llorar con la Llorona", completed: false},
  {text: "LALALALALAL", completed: false},
  {text: "Usar Estados Derivados", completed: true},
];

const strTODOs = JSON.stringify(defaultTodos)

localStorage.setItem('TODOs_V1', defaultTodos) */
/* localStorage.removeItem('TODOs_V1', defaultTodos) */