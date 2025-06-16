import { createContext, useState } from "react";

import { useLocalStorage } from '../customHooks/useLocalStorage.js';

const TodoContext = createContext();

function TodoProvider({children}){

    const {
        item: todos,
        saveItems: saveTodos, 
        loading, 
        error
    } = useLocalStorage('defaultTodos_TODO_Machine_v1',[]); //nombre item localStorage, estadoInicial

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

    //Marcar tarea completada
    const completeTodo = (title) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex( (todo) => todo.title === title )
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    //Eliminar Tarea
    const deleteTodo = (title) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex( (todo) => todo.title === title );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    //Agregar tarea
    const createTodo = (title, description) => {
        const newTodos = [...todos];
        const todo = {
            title: title,
            description: description
        }
        newTodos.push(todo);
        saveTodos(newTodos);
    } 

    return(
        <TodoContext.Provider value={{
            setSearchValue,
            searchValue,
            setFilterValue,
            completedTodos,
            totalTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            createTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };