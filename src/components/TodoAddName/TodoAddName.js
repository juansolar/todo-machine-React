import './TodoAddName.css';

function TodoAddName({name}){
    return(
        <div className='addTitle'>
            <label className='addTitle-label'>{name}:</label>
            <input className='addTitle-input' type="text" placeholder={`Type the ${name.toLowerCase()}`}/>
        </div>
    );
}

export { TodoAddName }