import React from 'react';
import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar el Curso de Intro a React.js", completed: false},
  {text: "Llorar con la Llorona", completed: false},
  {text: "LALALALALAL", completed: false},
  {text: "Usar Estados Derivados", completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText)
    }
  );

  console.log(`Los usuarios buscan TODOs de ${searchValue}`);

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
          />
        ))}
      </TodoList>
      
      {<CreateTodoButton />}
    </React.Fragment>
  );
}

export default App;
