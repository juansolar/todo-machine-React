import './TodoItem.css';
import miImagen from './files/delete_task.png';
import check from './files/comprobado.png';
import noCheck from './files/cheque.png';

function TodoItem({title, description, completed}){
    return(
      <li className="item">
        <div className='item-information'>
          <p className='item-title'>{title}</p>
          <p className='item-description'>{description}</p>
        </div>
        <div className='item-options'>
          <div className='item-check'>
            <img className='check-icon' src={completed ? check : noCheck} alt='icon check'/>
          </div>
          <div className='item-delete'>
            <img className='delete-icon' src={miImagen} alt='delete icon'/>
          </div>
        </div>
      </li>
    );
  }

export { TodoItem };