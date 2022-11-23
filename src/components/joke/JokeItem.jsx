const JokeItem = ({joke}) => {
    return (
        <div className="joke-item">
            <p>{joke.value}</p>
        </div>
    )
}

export default JokeItem