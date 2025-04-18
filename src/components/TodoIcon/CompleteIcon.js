import React from "react";
import {TodoIcon} from '.';

function CompleteIcon({completed, onComplete}) {
    return(
        <TodoIcon
            type="check"
            color={completed ? 'green' : undefined}
            checked={completed ? 'flex' : 'none'}
            onClick={onComplete}
        />
    );
    
}

export {CompleteIcon};