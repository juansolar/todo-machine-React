import './TodoFilter.css';

function TodoFilter({type, setFilterValue}){

    return(
        <select className="SelectType" onChange={ (event) => setFilterValue(event.target.value) }>
            {type.map( (item, index) => (
                <option className='SelectType-option' 
                    key={index} value={item.type} >
                        {item.text}
                </option>
            ) )}
        </select>
    );
}

export { TodoFilter };