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
  {text: "LALALALALAL", completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoTitle completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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
