import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';

import './TodoIcon.css'

const iconTypes={
    "check": (color, checked) => <CheckSVG className='Icon-svg' fill={color} display={checked}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>
};

function TodoIcon({type, color, onClick, checked}) {
    return(
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color, checked)}
        </span>
    )
}

export {TodoIcon};