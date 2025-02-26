import React from 'react';
import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

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

function App() {
  /* Se obtiene los TODOs desde el localStorage */
  const lS_TODOs = localStorage.getItem('TODOs_V1');
  let parsedTodos;
  
  /* Verifica si existe un contenido en localStorage si no, crea la variable en un arreglo vacio */
  if (!lS_TODOs) {
    /* Importante que para crear contenido en el localStorage debe guardarse este en String */
    localStorage.setItem('TODOs_V1', JSON.stringify([]))
    parsedTodos = [];
  } else{
    /* El contenido del localStorage lo convierte en Objeto o este caso, un arreglo de objetos para la manipulacion de este en el codigo */
    parsedTodos = JSON.parse(lS_TODOs);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText)
    }
  );

  /* Esta funcion guarda los cambios de los TODOs en el estado y en el localStorage */
  const safeTodos = (newTodos) => {

    localStorage.setItem('TODOs_V1', JSON.stringify(newTodos))

    setTodos(newTodos)
  }

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
    safeTodos(newTodos)
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
    safeTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoTitle 
      completed={completedTodos} 
      total={totalTodos}/>
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItems 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            /* Muy importante que cuanto queramos usar una funcion en un prop la encapsulemos en otra funcion */
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      {<CreateTodoButton />}
    </React.Fragment>
  );
}

export default App;
