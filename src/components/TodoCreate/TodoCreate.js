import { useContext, useState } from "react";
import { TodoTitle } from "../TodoTitle/TodoTitle";

import './TodoCreate.css';
import { TodoContext } from "../../context/TodoContext";

//Caracteres totales
const totalCharacters = 50;

//Teclas especiales descartadas
  const nonPrintableKeys = [
    'Backspace',
    'Delete',
    'Shift',
    'Control',
    'Alt',
    'Meta',
    'CapsLock',
    'Enter',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
  ];

function TodoCreate(){  

    const {createTodo} = useContext(TodoContext);

    const [description, setDescription] = useState('');

    const handleDescription = (event) =>{
        if (event.key === "Delete" || event.key === "Backspace") 
            setDescription((prev) => prev.slice(0, -1) )
        else if(description.length < totalCharacters && !nonPrintableKeys.includes(event.key))
            setDescription((prev) => prev + event.key);
    }

    return( 
        <form className="create-target" onSubmit={(event) =>{
            createTodo(event.target.title.value, event.target.description.value);
        }}>
            <TodoTitle title={'Create new task'} classType={'title-secundary'}/>
            <div className='addTitle'>
                <label className='addTitle-label' id="title">Title:</label>
                <input className='addTitle-input' name="title" type="text" placeholder={`Type the title`}/>
            </div>
            
            <div className="addDescription">
                <label className='addDescription-label'>Description:</label>
                <div className='addDescription-text'>
                    <textarea className='addDescription-textarea' name="description" placeholder={'Type the description:'}
                        onKeyDown={handleDescription}
                        value={description}
                        onChange={() => {}}
                        //se le indica a React que tengo el onChange pero no quiero hacer nada con el, así no se queja
                    />
                    <p className='addDescription-p'>{description.length} de {totalCharacters}</p>
                </div>
            </div>

            <button className="add-button">
                Add Task
            </button>
        </form>
    )
}

export { TodoCreate }