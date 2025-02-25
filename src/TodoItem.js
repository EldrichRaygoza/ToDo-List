import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import './TodoItem.css'

function TodoItems(props){
  return(
    <li className='Todo-Items'>
    <CompleteIcon 
      completed={props.completed}
      onComplete={props.onComplete}
    />
    {/* <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
    >V</span> */}
    <p 
      onClick={props.onComplete} 
      className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
    >{props.text}</p>

    <DeleteIcon
      onDelete={props.onDelete}
    />
    </li>
  );
}

export {TodoItems};