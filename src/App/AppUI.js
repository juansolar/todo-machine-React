import { TodoCounter } from '../components/TodoCounter/TodoCounter.js';
import { TodoSearch } from '../components/TodoSearch/TodoSearch.js';
import { TodoList } from '../components/TodoList/TodoList.js';
import { TodoItem } from '../components/TodoItem/TodoItem.js';
import { TodoFilter } from '../components/TodoFilter/TodoFilter.js';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.js';
import { TodoTitle } from '../components/TodoTitle/TodoTitle.js';
import { TodoAddName } from '../components/TodoAddName/TodoAddName.js';
import { TodoAddDescription } from '../components/TodoAddDescription/TodoAddDescription.js';

function AppUI({
    setSearchValue,
    searchValue,
    typeTodo,
    setFilterValue,
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
  return (
    <div className='app'>
      <TodoTitle title={'TO-DO MACHINE'} classType={'title-principal'}/>
      <div className='app-container'>
        <div className='create-container'>
          <div className='create-target'>
            <TodoTitle title={'CREATE NEW TASK'} classType={'title-secundary'}/>
            <TodoAddName name={'Title'}/>
            <TodoAddDescription name={'Description'}/>
            <CreateTodoButton name={'Add Task'}/>
          </div>
        </div>
        <div className='todo-container'>
          <div className='todo-search'>
            <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue}/>
            <TodoFilter type={typeTodo} setFilterValue={setFilterValue}/>
          </div>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoList>
            {searchedTodos.map( todo => (
                <TodoItem key={todo.title} 
                  title={todo.title} 
                  description={todo.description} 
                  completed={todo.completed}
                  onComplete = { () => completeTodo(todo.title) }
                  onDelete = { () => deleteTodo(todo.title) }
                  />)
              )}
          </TodoList>
        </div>
      </div>

    </div>
  );
}

export {AppUI}