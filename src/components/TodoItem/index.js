import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItems(props){
  return(
    <li className='Todo-Items' onClick={props.onComplete} >
      <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p 
        // onClick={props.onComplete} 
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >{props.text}</p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export {TodoItems};