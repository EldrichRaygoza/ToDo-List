import React from 'react';
import './TodosLoading.css'

function TodosLoading(){
  return(
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-Icon CompleteIcon'></span>
      <p className='LoadingTodo-text'></p>
      <span className='LoadingTodo-Icon DeleteIcon'></span>
    </div>
  );
}

export {TodosLoading};