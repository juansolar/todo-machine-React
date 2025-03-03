import './TodoFilter.css';

function TodoFilter({typeTodo}){
    return(
        <select className="SelectType">
            {typeTodo.map( (typeTodo, index) => (
                <option className='SelectType-option' key={index} value={typeTodo.type}>{typeTodo.text}</option>
            ) )}
        </select>
    );
}

export { TodoFilter };