import './TodoAddDescription.css';

function TodoAddDescription({name, written, total}){
    return(
        <div className="addDescription">
            <label className='addDescription-label'>{name}:</label>
            <div className='addDescription-text'>
                <textarea className='addDescription-textarea' placeholder={`Type the ${name.toLowerCase()}`}></textarea>
                <p className='addDescription-p'>{written} de {total}</p>
            </div>
        </div>
    )
}

export { TodoAddDescription }