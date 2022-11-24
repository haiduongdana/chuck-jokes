import { connect } from "react-redux";
import style from "./jokeDetail.module.scss";
import likeIcon from "../../assets/icons/like.png";
import dislikeIcon from "../../assets/icons/dislike.png";
import arrowLeft from "../../assets/images/arrow-left@3x.png";
import arrowRight from "../../assets/images/arrow-right@3x.png";
import returnArrow from "../../assets/images/returnArrow.png";
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
        <div className={style.container + " " + style.return_btn}>
          <button>
            <img src={returnArrow} alt="" />
          </button>          
        </div>
        <section className={style.container}>
          <div className={style.detail_content}>
            <div>
              <div>
                <div>
                  <span>• Social Jokes</span>
                </div>
                <div>
                  <span>• Trending</span>
                </div>

              </div>
              <div className={style.joke_content}>
                <h3>{joke.id}</h3>
                <p>{joke.value}</p>
              </div>
              
              <div className={style.actions}>
                <button
                  onClick={() => handleAction("LIKE")}
                  className={cx({ action_button: true, like: status === 1 })}
                >
                  <img src={likeIcon} alt="" />
                  <span>
                    {like}
                  </span>
                </button>
                <button
                  className={cx({ action_button: true, disliked: status === -1 })}
                  onClick={() => handleAction("DISLIKE")}
                >
                  <img src={dislikeIcon} alt="" />
                  <span>
                    {dislike}
                  </span>
                </button>
              </div>

              <div className={style.changeJoke}>
                <button>
                  <img src={arrowLeft} alt="" />
                  <span>
                    Prev Joke
                  </span>
                </button>
                <button>
                  <span>
                    Next Joke
                  </span>
                  <img src={arrowRight} alt="" />
                </button>
              </div>
            </div>

            <div>
              <h5>The top 10 Jokes this week</h5>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>
              <a href="#">Smoking Joke</a>            
            </div>
          </div>
        </section>
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
