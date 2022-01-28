import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <div className="button_add">
            <button onClick={onClickButton} type="button" className="btn btn-outline-success add">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
        </div>

    )
}

export { CreateTodoButton }