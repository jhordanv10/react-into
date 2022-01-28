import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

    const {searchValue, setSearchValue} =  React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return (
        <section className="search">
            <div className="input-group flex-nowrap div_search">
                <input value={searchValue} onChange={onSearchValueChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Buscar"></input>
            </div>
        </section>
    )
}

export { TodoSearch }