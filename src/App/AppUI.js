import React from 'react';
import { TodoTitle } from '../components/TodoTitle';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItems } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return(
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
        
        <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI};