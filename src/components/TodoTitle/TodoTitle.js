import './TodoTitle.css';

function TodoTitle({ title, classType }){
    return(
        <p className={classType}>{title}</p>
    );
}

export { TodoTitle };