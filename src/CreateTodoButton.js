import './CreateTodoButton.css';

function CreateTodoButton(){
    return(
      <button className="add-button" onClick={ () => console.log('Le diste click') }>
        Add Task
      </button>
    );
  }

export { CreateTodoButton };