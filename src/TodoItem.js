function TodoItem({text, completed}){
    return(
      <li>
        <span>{completed ? "Completado" : "No Completado"}</span>
        <p>{text}</p>
        <span>X</span>
      </li>
    );
  }

export { TodoItem };