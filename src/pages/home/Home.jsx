import { useEffect, useState } from "react";
import {
  chooseJoke,
  getAllJokes,
  getCategories,
  getFilterJokes,
} from "../../actions";
import { connect } from "react-redux";
import style from "./home.module.scss";
import JokeList from "../../components/joke/JokeList";
import JokeItem from "../../components/joke/JokeItem";
import Loading from "../../components/loading/Loading";
import arrowDown from "../../assets/images/path-copy-7@3x.png";

const Home = ({
  filterJokes,
  isFetching,
  categories,
  getAllJokes,
  getCategories,
  getFilterJokes,
  chooseJoke,
}) => {
  const isEmpty = filterJokes.length === 0;
  let [count, setCount] = useState(6);

  useEffect(() => {
    getAllJokes();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJokes = (category) => {
    getFilterJokes(category);
  };

  const color = [
    "#00FFFF",
    "#7FFFD4",
    "#0000FF",
    "#8A2BE2",
    "#A52A2A",
    "#5F9EA0",
    "#7FFF00",
    "#FF7F50",
    "#6495ED",
    "#DC143C",
    "#008B8B",
    "#006400",
    "#8B008B",
    "#FF1493",
    "#00BFFF",
    "#B22222",
    "#FFD700",
    "#008000",
    "#ADFF2F",
    "#4B0082",
  ];

  return (
    <>
      <div className={style.categories_list}>
        <div className={style.categories_container}>
          {categories.map((category, index) => (
            <div key={category.value} className={style.categories_item}>
              <button
                onClick={() => getJokes(category.value)}
                className={style.categories_btn}
                style={{ backgroundColor: color[index] }}
              >
                {category.name}
              </button>
            </div>
          ))}
          <div className={style.categories_item + " " + style.view_all}>
            <button
              className={style.categories_btn}
              onClick={() => getJokes("all")}
            >
              VIEW ALL
              <img
                className={style.arrowDown}
                src={arrowDown}
                alt="arrowDown"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={style.joke_container}>
        <JokeList>
          {isEmpty ? (
            isFetching ? (
              <Loading />
            ) : (
              <p>Empty</p>
            )
          ) : (
            filterJokes
              .slice(0, count)
              .map((joke) => (
                <JokeItem key={joke.id} handleClick={chooseJoke} joke={joke} />
              ))
          )}
        </JokeList>
        <div className={style.view_more}>
          <button
            onClick={() => {
              if (count < filterJokes.length) {
                setCount((count += 6));
              }
            }}
          >
            View more
            <img className={style.arrowDown} src={arrowDown} alt="arrowDown" />
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    filterJokes: state.filterJokes,
    categories: state.categories,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllJokes: () => dispatch(getAllJokes()),
    getCategories: () => dispatch(getCategories()),
    getFilterJokes: (category) => dispatch(getFilterJokes(category)),
    chooseJoke: (joke) => dispatch(chooseJoke(joke)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
