import { Link } from "react-router-dom";

const JokeItem = ({ joke, handleClick }) => {
  return (
    <div className="joke-item-container">
      <div className="joke-item">
        <h3>{joke.id}</h3>
        <p>{joke.value}</p>
        <Link className="joke-link" onClick={() => handleClick(joke)} to="/joke">
          See stats
          <img src="../assets/imagess/path@3x.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default JokeItem;
