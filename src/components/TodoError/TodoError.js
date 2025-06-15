import './TodoError.css'

function TodoError({errorCode, errorMessage}){
    return(
        <div className='error'>
            <section className="error-container">
                <span><span>{errorCode[0]}</span></span>
                <span>{errorCode[1]}</span>
                <span><span>{errorCode[2]}</span></span>
            </section>
            <p>{errorMessage}</p>
        </div>
    )
}

export {TodoError}