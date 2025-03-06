import React, { useState } from 'react';

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
  {title: 'Subir cambios', description: 'Tendremos que subir los cambios al repositorio', completed: true},
  {title: 'Esperar merge', description: 'Tengo q esperar que mi compañero termine su parte del trabajo', completed: true},
  {title: 'Alistar maleta', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
  {title: 'tarea 2', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
  {title: 'tarea 3', description: 'Organizar la habitación tanto para el frio como el calor de esa ciudad', completed: false},
  {title: 'tarea 4', description: 'Organizar la casa de campo tanto para el frio como el calor de esa ciudad', completed: true},
  {title: 'tarea 5', description: 'Organizar la maleta tanto para el frio como el calor de esa ciudad', completed: true},
  {title: 'viajar', description: 'Viajar a Popayán', completed: true},
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

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className='app'>
      <TodoTitle title={'TO-DO MACHINE'} classType={'title-principal'}/>
      <div className='app-container'>
        <div className='create-container'>
          <div className='create-target'>
            <TodoTitle title={'CREATE NEW TASK'} classType={'title-secundary'}/>
            <TodoAddName name={'TITLE'}/>
            <TodoAddDescription name={'DESCRIPTION'} written={description.written} total={description.total}/>
            <CreateTodoButton />
          </div>
        </div>
        <div className='todo-container'>
          <div className='todo-search'>
            <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue}/>
            <TodoFilter typeTodo={typeTodo}/>
          </div>
          <TodoCounter completed={completedTodos} total={totalTodos} />
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
