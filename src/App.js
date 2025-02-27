import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Tarea 1', completed: false},
  {text: 'Tarea 2', completed: false},
  {text: 'Tarea 3', completed: false},
  {text: 'Tarea 4', completed: false},

];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={30} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map( todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>) )}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
