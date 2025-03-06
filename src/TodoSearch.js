import React from 'react';

import './TodoSearch.css'

function TodoSearch({setSearchValue, searchValue}){

    return(
        <input className='TodoSearch' type='text' placeholder="Search Task"
            value={searchValue}
            onChange={ (event) => setSearchValue(event.target.value) }
        />
    );
}

export { TodoSearch };