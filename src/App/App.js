import { useState } from 'react';

import { AppUI } from './AppUI.js';
import { useLocalStorage } from '../customHooks/useLocalStorage.js';

import './App.css';


// const defaultTodos = [
//   {title: 'Cambiar código', description: 'Se deberá realizar un cambio de código', completed: false},
//   {title: 'Subir cambios', description: 'Tendremos que subir los cambios al repositorio', completed: true},
//   {title: 'Esperar merge', description: 'Tengo q esperar que mi compañero termine su parte del trabajo', completed: true},
//   {title: 'Alistar maleta', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
//   {title: 'tarea 2', description: 'Organizar la ropa tanto para el frio como el calor de esa ciudad', completed: false},
//   {title: 'tarea 3', description: 'Organizar la habitación tanto para el frio como el calor de esa ciudad', completed: false},
//   {title: 'tarea 4', description: 'Organizar la casa de campo tanto para el frio como el calor de esa ciudad', completed: true},
//   {title: 'tarea 5', description: 'Organizar la maleta tanto para el frio como el calor de esa ciudad', completed: true},
//   {title: 'viajar', description: 'Viajar a Popayán', completed: true}
// ];

// localStorage.setItem('defaultTodos_TODO_Machine_v1', JSON.stringify(defaultTodos));
// localStorage.removeItem('defaultTodos_TODO_Machine_v1');

const typeTodo = [
  {type: 'all', text: 'All'},
  {type: 'complete', text: 'Complete'},
  {type: 'incomplete', text: 'Incomplete'}
]

function App() {

  const [todos, saveTodos] = useLocalStorage('defaultTodos_TODO_Machine_v1',[]); //nombre item localStorage, estadoInicial
  const [searchValue, setSearchValue] = useState('');//valor de búsqueda
  const [filterValue, setFilterValue] = useState('all');//filtro de búsqueda

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
    saveTodos(newTodos);
  }

  const deleteTodo = (title) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.title === title );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return( 
    <AppUI 
      setSearchValue = {setSearchValue}
      searchValue = {searchValue}
      typeTodo = {typeTodo}
      setFilterValue = {setFilterValue}
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  )
}

export default App;
