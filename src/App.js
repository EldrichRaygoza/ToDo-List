import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

function App() {
  return (
    <div className="App">

      <TodoTitle />
      <TodoSearch />

      <TodoList>
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </TodoList>
      
      {<CreateTodoButton />}
    </div>
  );
}

export default App;
