import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoFilter } from './TodoFilter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoTitle } from './TodoTitle';
import { TodoAddName } from './TodoAddName';
import { TodoAddDescription } from './TodoAddDescription';

import './App.css';

const defaultTodos = [
  {title: 'Cambiar código', description: 'Se deberá realizar un cambio de código', completed: false},
  {title: 'Subir cambios', description: 'Tendremos que subir los cambios al repositorio', completed: false},
  {title: 'Esperar merge', description: 'Tengo q esperar que mi compañero termine su parte del trabajo', completed: false},
  {title: 'Alistar maleta', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false}
];

const typeTodo = [
  {type: 'all', text: 'All'},
  {type: 'complete', text: 'Complete'},
  {type: 'incomplete', text: 'Incomplete'}
]

const description = {
  written: 0,
  total: 100
}

function App() {
  return (
    <div className='app'>
      <TodoTitle title={'TO-DO MACHINE'} size={32}/>
      <div className='app-container'>
        <div className='create-container'>
          <div className='create-target'>
            <TodoTitle title={'CREATE NEW TASK'} size={20}/>
            <TodoAddName name={'TITLE'}/>
            <TodoAddDescription name={'DESCRIPTION'} written={description.written} total={description.total}/>
            <CreateTodoButton />
          </div>
        </div>
        <div className='todo-container'>
          <div className='todo-search'>
            <TodoSearch />
            <TodoFilter typeTodo={typeTodo}/>
          </div>
          <TodoCounter completed={16} total={30} />
          <TodoList>
            {defaultTodos.map( todo => (
              <TodoItem key={todo.title} title={todo.title} description={todo.description} completed={todo.completed}/>) 
              )}
          </TodoList>
        </div>
      </div>

    </div>
  );
}

export default App;
