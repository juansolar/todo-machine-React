function TodoTitle({ title, size }){
    return(
        <p style={ {fontSize: size, fontWeight: "bold", textAlign: "center"}}>{title}</p>
    );
}

export { TodoTitle };