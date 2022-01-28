import React from "react";
import './todoForm.css'
import {TodoContext} from '../../TodoContext'
import swal from 'sweetalert'


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue (event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (newTodoValue) {
            addTodo(newTodoValue)
            setOpenModal(false)
        } else {
            swal({
                title: 'Error',
                text:'Debe dar un nombre de Todo',
                icon:'warning',
                button: 'Aceptar',
            })
        }
        
    }

    return (
        <form className="formModal" onSubmit={onSubmit}>
            <div className="form-floating">
                <label for="floatingTextarea2">Nuevo Todo</label>
                <textarea className="form-control" value = {newTodoValue} onChange={onChange}
                placeholder="Ingresa el todo a crear" id="floatingTextarea2"></textarea>
                <div className="buttonModal">
                    <button type="submit" className="btn btn-success addTodo">Agregar</button>
                    <button onClick={onCancel} type="button" className="btn btn-danger cancelTodo">Cancelar</button>
                </div>
            </div>
        </form>
    )
}

export { TodoForm }