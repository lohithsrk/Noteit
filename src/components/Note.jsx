import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function handleClick(event) {
        props.onDelete(props.id)
        event.preventDefault()
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note