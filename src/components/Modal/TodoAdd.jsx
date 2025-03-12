import React from "react";
import './TodoAdd.css'
import { TodoContext } from "../../context/TodoContext";

function TodoAdd(){

    const {openModal,setOpenModal} = React.useContext(TodoContext);

    return(
        <div className="Todo-Add-Container">
            <form className="Todo-Add">
                <label>Escribe tu nuevo TODO</label>
                <textarea name="newtodo" id="newtodo" placeholder="Escribe con confianza tu TODO..."></textarea>
                <button onClick={()=>(
                    setOpenModal(!openModal)
                )}>Guardar</button>
            </form>
        </div>
    );
}

export {TodoAdd}