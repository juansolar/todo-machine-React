import './TodoList.css';

function TodoList(props){
    return(
        <div className='list'>
            <div className="list-header">
                <div className='header-information'>
                    <p className='header-title'>Title</p>
                    <p className='header-description'>Description</p>
                </div>
                <p className='list-options'>Options</p>
            </div>            
            <ul className="list-u">
                <div className='list-items'>
                    {props.children}
                </div>
            </ul>
        </div>
    );
}

export { TodoList };