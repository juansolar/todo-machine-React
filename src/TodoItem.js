import './TodoItem.css';

function TodoItem({title, description, completed}){
    return(
      <li className="item">
        <div className='item-information'>
          <p className='item-title'>{title}</p>
          <p className='item-description'>{description}</p>
        </div>
        <div className='item-options'>
          <span>{completed ? "O" : "X"}</span>
          <span>Del</span>
        </div>
      </li>
    );
  }

export { TodoItem };