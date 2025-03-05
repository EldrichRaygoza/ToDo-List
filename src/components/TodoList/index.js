import './TodoList.css'

function TodoList({children}){
    return(
      <ul className='todo-list-container'>
        {children}
      </ul>
    );
  }

export {TodoList};