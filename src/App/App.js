import { AppUI } from './AppUI.js';
import { TodoProvider } from '../context/TodoContext.js';

import './App.css';

function App() {

  return( 
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
