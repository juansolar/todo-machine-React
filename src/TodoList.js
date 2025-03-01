import './TodoList.css';

function TodoList(props){
    return(
        <ul className="list">
            <div className="list-header">
                <div className='header-information'>
                    <p className='header-title'>Title</p>
                    <p className='header-description'>Description</p>
                </div>
                <p>Options</p>
            </div>
            {props.children}
        </ul>
    );
}

export { TodoList };