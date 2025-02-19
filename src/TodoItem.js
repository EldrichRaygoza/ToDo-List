import './TodoItem.css'

function TodoItems(props){
  return(
    <li className='Todo-Items'>
    <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
    <p 
      onClick={props.onComplete} 
      className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
    >{props.text}</p>
    <span 
      className='Icon Icon-delete'
      onClick={props.onDelete}
    >X</span>
    </li>
  );
}

export {TodoItems};