import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <>
            {total === 0 ? 
                <p className='counter-p'>
                    You have no tasks registered
                </p>
                : (total !== completed ? (
                    <p className='counter-p'>
                        You have completed {completed} out of {total} tasks
                    </p>
                ): (
                    <p className='counter-p'>
                        Congratulations, you completed all your tasks 🥳
                    </p>
                ))
            }
        </>
    );
}

export { TodoCounter };