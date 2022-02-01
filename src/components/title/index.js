import React from "react";
import './TodoCounter.css';


function TodoCounter ( {totalTodos, completedTodos}) {

    return (
        <h2 className="tittle"> <strong> Has completado {completedTodos} de {totalTodos} TODO's </strong> </h2>
    )
}

export { TodoCounter };