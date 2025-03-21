import React from 'react';
import './TodoTitle.css';
import { TodoContext } from '../../context/TodoContext';

function TodoTitle(){

  const {
    completedTodos : completed, 
    totalTodos: total,
  } = React.useContext(TodoContext);

  return(

    total === 0 ? 
    <h1 className='TodoTitle'>
      <div className='TitleText'>
        <span>😃✏️</span>
        <span>Escribe tu primer TODO</span>
        <span>✏️😃</span>
      </div>
    </h1>
    :
      total === completed ? 
        <h1 className='TodoTitle'>
          <div className='TitleCompleted'>
            <span>🎉🎉🎉</span>
            <span>HAS COMPLETADO TODOs</span>
            <span>🎉🎉🎉</span>
          </div>
        </h1>
      :
        <h1 className='TodoTitle'>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
  );
}

export {TodoTitle};