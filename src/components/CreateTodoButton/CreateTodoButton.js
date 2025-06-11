import './CreateTodoButton.css';

function CreateTodoButton({name}){
    return(
      <button className="add-button" onClick={ () => console.log('Le diste click') }>
        {name}
      </button>
    );
  }

export { CreateTodoButton };