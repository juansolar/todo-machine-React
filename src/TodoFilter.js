import './TodoFilter.css';

function TodoFilter({typeTodo, setFilterValue}){

    return(
        <select className="SelectType" onChange={ (event) => setFilterValue(event.target.value) }>
            {typeTodo.map( (typeTodo, index) => (
                <option className='SelectType-option' 
                    key={index} value={typeTodo.type} >
                        {typeTodo.text}
                </option>
            ) )}
        </select>
    );
}

export { TodoFilter };