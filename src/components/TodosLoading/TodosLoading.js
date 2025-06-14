import './TodosLoading.css';

function TodosLoading(){
    return(
        <div className='loading'>
            <div className='loading__icon'></div>
            <p className='loading__message'>Loading...</p>
        </div>
    )
}

export {TodosLoading}