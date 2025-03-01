import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <p className='counter-p'>
            You have completed {completed} out of {total} tasks
        </p>
    );
}

export { TodoCounter };