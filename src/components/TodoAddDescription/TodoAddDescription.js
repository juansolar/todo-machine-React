import { useState } from 'react';
import './TodoAddDescription.css';

const totalCharacters = 50;

function TodoAddDescription({name}){

    const [description, setDescription] = useState('');

    const handleDescription = (event) =>{
        if (event.key === "Delete" || event.key === "Backspace") 
            setDescription((prev) => prev.slice(0, -1) )
        else if(description.length < totalCharacters)
            setDescription((prev) => prev + event.key);
    }


    return(
        <div className="addDescription">
            <label className='addDescription-label'>{name}:</label>
            <div className='addDescription-text'>
                <textarea className='addDescription-textarea' placeholder={`Type the ${name.toLowerCase()}`}
                    onKeyDown={handleDescription}
                    value={description}
                />
                <p className='addDescription-p'>{description.length} de {totalCharacters}</p>
            </div>
        </div>
    )
}

export { TodoAddDescription }