import { Link } from "react-router-dom";
import style from "./jokeItem.module.scss";
import arrow from "../../assets/images/path@3x.png";
import lightning from "../../assets/images/green-light-copy@3x.png"

const JokeItem = ({ joke, handleClick }) => {
  return (
    <div className={style.joke_item_container}>
      <div className={style.joke_item}>
        <h3 className={style.joke_header}>
          <img src={lightning} alt="lightning" />
          <span>
            {joke.id}
          </span>
        </h3>
        <p>{joke.value}</p>
        <Link className={style.joke_link} onClick={() => handleClick(joke)} to="/joke">
          <span>
            See stats
          </span>
          <img className={style.joke_link_icon} src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default JokeItem;
