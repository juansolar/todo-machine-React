import './TodoSearch.css'

function TodoSearch({setSearchValue, searchValue}){

    return(
        <input className='TodoSearch' type='text' placeholder="Type to search"
            value={searchValue}
            onChange={ (event) => setSearchValue(event.target.value) }
        />
    );
}

export { TodoSearch };