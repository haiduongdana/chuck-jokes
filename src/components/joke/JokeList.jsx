import style from "./jokeItem.module.scss"

const JokeList = ({children}) => {
    return (
        <div className={style.joke_list}>
            {children}
        </div>
    )
}

export default JokeList