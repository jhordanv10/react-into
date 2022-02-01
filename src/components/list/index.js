import React from "react";
import './TodoList.css';


function TodoList(props) {
    const renderFunction = props.children || props.render
    return (
        <section className="list">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchTodos.length) &&props.onEmptySearchResults(props.searchText)}

            {props.searchTodos.map(renderFunction)}

           
        </section>
    )
}

export { TodoList }