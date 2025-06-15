import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../context/TodoContext';

function TodoCounter(){

    const {
        totalTodos, 
        completedTodos
    } = useContext(TodoContext);

    return(
        <>
            {totalTodos === 0 ? 
                <p className='counter-p'>
                    You have no tasks registered
                </p>
                : (totalTodos !== completedTodos ? (
                    <p className='counter-p'>
                        You have completed {completedTodos} out of {totalTodos} tasks
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