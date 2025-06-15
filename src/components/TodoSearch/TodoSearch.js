import { useContext } from 'react';

import { TodoContext } from '../../context/TodoContext';

import './TodoSearch.css'


function TodoSearch(){

    const {
        setSearchValue, 
        searchValue
    } = useContext(TodoContext);

    return(
        <input className='TodoSearch' type='text' placeholder="Type to search"
            value={searchValue}
            onChange={ (event) => setSearchValue(event.target.value) }
        />
    );
}

export { TodoSearch };