import { Link } from "react-router-dom";

const JokeItem = ({ joke, handleClick }) => {
  return (
    <div className="joke-item">
      <h3>{joke.id}</h3>
      <p>{joke.value}</p>
      <Link onClick={() => handleClick(joke)} to="/joke">
        See stats
      </Link>
    </div>
  );
};

export default JokeItem;
