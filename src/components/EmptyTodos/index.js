import React from 'react';
import {ReactComponent as RightArrow} from './rightArrow.svg';
import './EmptyTodos.css'

function EmptyTodos(){
  return(
    <>
      <div className='emptyContent'>
        <p>¡Bienvenido, empieza a crear tu primer TODO :D!</p>
      </div>
      <RightArrow className='rightArrow'/>
    </>
  );
}

export {EmptyTodos};