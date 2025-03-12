import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
      } = useLocalStorage('TODOs_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          
          return todoText.includes(searchText)
        }
      );
    
      const completeTodo = (text) => {
        /* newTodos va copear el arreglo de todos */
        const newTodos = [...todos];
        /* Aqui se va buscar el indice del TODO donde se este ejecutando el evento */
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        /* la propiedad completed del objeto cuyo indice encontramos va a alternar true/false cuando se ejecute el evento */
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        /* Se actualiza los TODOs con el nuevo arreglo */
        saveTodos(newTodos)
      }
      
      const deleteTodo = (text) => {
        /* newTodos va copear el arrelgo de todos */
        const newTodos = [...todos];
        /* Aqui se va buscar el indice del TODO donde se este ejecutando el evento */
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        /* En base al indice encontrado va a eliminar este objeto con el metodo Splice, donde se coloca el indice donde va empezar a extraer/borrar y cuantos de ellos se eliminaran*/
        newTodos.splice(todoIndex, 1);
        /* Se actualiza los TODOs con el nuevo arreglo */
        saveTodos(newTodos)
      }
      
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};