import { TodoCounter } from '../components/TodoCounter/TodoCounter.js';
import { TodoSearch } from '../components/TodoSearch/TodoSearch.js';
import { TodoList } from '../components/TodoList/TodoList.js';
import { TodoItem } from '../components/TodoItem/TodoItem.js';
import { TodoFilter } from '../components/TodoFilter/TodoFilter.js';
import { TodoTitle } from '../components/TodoTitle/TodoTitle.js';
import { TodosLoading } from '../components/TodosLoading/TodosLoading.js';
import { TodoError } from '../components/TodoError/TodoError.js';
import { TodoContext } from '../context/TodoContext.js';
import { useContext } from 'react';
import { TodoCreate } from '../components/TodoCreate/TodoCreate.js';

function AppUI(){

  const { loading } = useContext(TodoContext);

  return (
    <div className='app'>
      <TodoTitle title={'TO-DO MACHINE'} classType={'title-principal'}/>
      <div className='app-container'>
        <div className='create-container'>
          <TodoCreate />
        </div>
        <div className='todo-container'>
          <div className='todo-search'>
            <TodoSearch />
            <TodoFilter/>
          </div>
          {!loading && <TodoCounter  />}
          <TodoContext.Consumer>
            {(  {searchedTodos,
                completeTodo,
                deleteTodo,
                error}
              ) =>(
              <TodoList>
                {loading && <TodosLoading />}
                {!loading && error && <TodoError errorCode={'503'} errorMessage={'Error al cargar las tareas, intente nuevamente'}/>}
                {(!loading && !error && searchedTodos === 0) ? <p>Crea tu primera tarea</p>
                  : (!loading && !error && 
                      searchedTodos.map( todo => (
                      <TodoItem key={todo.title} 
                        title={todo.title} 
                        description={todo.description} 
                        completed={todo.completed}
                        onComplete = { () => completeTodo(todo.title) }
                        onDelete = { () => deleteTodo(todo.title) }
                        />)
                    )
                  )
                }
              </TodoList>
            )}
          </TodoContext.Consumer>

        </div>
      </div>

    </div>
  );
}

export {AppUI}