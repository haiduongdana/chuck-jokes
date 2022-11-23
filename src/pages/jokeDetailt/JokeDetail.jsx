import { connect } from "react-redux";
import style from "./jokeDetail.module.scss";
import likeIcon from "../../assets/icons/like.png";
import dislikeIcon from "../../assets/icons/dislike.png";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

const JokeDetail = ({ joke }) => {
  // fake joke like and dislike
  let [like, setLike] = useState(Math.floor(Math.random() * 100));
  let [dislike, setDislike] = useState(Math.floor(Math.random() * 100));

  // status each time like or dislike
  let [status, setStatus] = useState(0);

  let cx = classNames.bind(style);
  useEffect(() => {
    setStatus(0);
  }, [joke]);

  //handle like ar dislike
  const handleAction = (type) => {
    if (type === "LIKE") {
      console.log(status);
      if (status === -1) {
        setDislike(dislike - 1);
      }
      if (status === 1) {
        setLike(like - 1);
        setStatus(0);
        return;
      }
      setLike(like + 1);
      setStatus(1);
    } else if (type === "DISLIKE") {
      if (status === 1) {
        setLike(like - 1);
      }
      if (status === -1) {
        setDislike(dislike - 1);
        setStatus(0);
        return;
      }
      setDislike(like + 1);
      setStatus(-1);
    }
  };

  if (joke != null) {
    return (
      <>
        <h3>{joke.id}</h3>
        {joke.value}
        <div className={style.actions}>
          <button
            onClick={() => handleAction("LIKE")}
            className={cx({ action_button: true, like: status === 1 })}
          >
            <img src={likeIcon} alt="" />
            {like}
          </button>
          <button
            className={cx({ action_button: true, disliked: status === -1 })}
            onClick={() => handleAction("DISLIKE")}
          >
            <img src={dislikeIcon} alt="" />
            {dislike}
          </button>
        </div>
      </>
    );
  } else {
    return "Not found";
  }
};
const mapStateToProps = (state) => {
  return { joke: state.joke };
};
export default connect(mapStateToProps, null)(JokeDetail);
