import React, { useState } from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoFilter } from './components/TodoFilter/TodoFilter';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoTitle } from './components/TodoTitle/TodoTitle';
import { TodoAddName } from './components/TodoAddName/TodoAddName';
import { TodoAddDescription } from './components/TodoAddDescription/TodoAddDescription';

import './App.css';

const defaultTodos = [
  {title: 'Cambiar código', description: 'Se deberá realizar un cambio de código', completed: false},
  {title: 'Subir cambios', description: 'Tendremos que subir los cambios al repositorio', completed: true},
  {title: 'Esperar merge', description: 'Tengo q esperar que mi compañero termine su parte del trabajo', completed: true},
  {title: 'Alistar maleta', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
  {title: 'tarea 2', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
  {title: 'tarea 3', description: 'Organizar la habitación tanto para el frio como el calor de esa ciudad', completed: false},
  {title: 'tarea 4', description: 'Organizar la casa de campo tanto para el frio como el calor de esa ciudad', completed: true},
  {title: 'tarea 5', description: 'Organizar la maleta tanto para el frio como el calor de esa ciudad', completed: true},
  {title: 'viajar', description: 'Viajar a Popayán', completed: true}
];

const typeTodo = [
  {type: 'all', text: 'All'},
  {type: 'complete', text: 'Complete'},
  {type: 'incomplete', text: 'Incomplete'}
]

function App() {

  const [todos, setTodos] = useState(defaultTodos); //Tareas
  const [searchValue, setSearchValue] = React.useState('');//valor de búsqueda
  const [filterValue, setFilterValue] = React.useState('all');//filtro de búsqueda

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Estado derivado
  const searchedTodos = todos.filter(
    (todo) => {
      const title = todo.title.toLocaleLowerCase();
      const description = todo.description.toLocaleLowerCase();
      const completed = todo.completed;
      const value = searchValue.toLocaleLowerCase();

      return ( (title.includes(value) || description.includes(value)) &&
          (filterValue === 'all' ? todos : (filterValue === 'complete' ? completed : !completed))
      );
    }
  );

  const completeTodo = (title) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.title === title )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (title) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.title === title );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

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

export default App;
