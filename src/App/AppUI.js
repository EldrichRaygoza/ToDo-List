import React from 'react';
import { TodoTitle } from '../components/TodoTitle';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItems } from '../components/TodoItem';
import {TodosLoading} from '../components/TodosLoading'
import {TodosError} from '../components/TodosError'
import {EmptyTodos} from '../components/EmptyTodos'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../context/TodoContext';

function AppUI(){
    return(
        <React.Fragment>
            <TodoTitle />
            <TodoSearch />
            
            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => (
                    <TodoList>
                        {loading && (
                            <>
                                <TodosLoading/>
                                <TodosLoading/>
                                <TodosLoading/>
                                <TodosLoading/>
                                <TodosLoading/>
                            </>
                        )}
                        {error && <TodosError/>}
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
                        
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
                )}
            </TodoContext.Consumer>
            
            
            <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI};