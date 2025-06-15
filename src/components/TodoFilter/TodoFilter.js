import { useContext } from 'react';
import './TodoFilter.css';
import { TodoContext } from '../../context/TodoContext';

const type = [
  {type: 'all', text: 'All'},
  {type: 'complete', text: 'Complete'},
  {type: 'incomplete', text: 'Incomplete'}
]

function TodoFilter(){

    const {
        setFilterValue
    } = useContext(TodoContext);

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