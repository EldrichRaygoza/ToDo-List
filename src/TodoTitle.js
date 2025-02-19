import './TodoTitle.css';

function TodoTitle({total, completed}){
    return(

      total === completed ? 
      <h1 className='TodoTitle'>
        <span>🎉🎉🎉 HAS COMPLETADO TODOs 🎉🎉🎉</span>
      </h1>
      :
      <h1 className='TodoTitle'>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  }

export {TodoTitle};