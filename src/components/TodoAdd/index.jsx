import React from "react";
import './TodoAdd.css'
import { TodoContext } from "../../context/TodoContext";

function TodoAdd(){

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () =>{
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return(
        <form 
            className="Todo-Add"
            onSubmit={onSubmit}
        >
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoAdd-button TodoAdd-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoAdd-button TodoAdd-button--add" 
                >Añadir</button>
            </div>
        </form>
    );
}

export {TodoAdd}