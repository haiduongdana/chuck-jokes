import { useEffect, useState } from "react";
import { getAllJokes, getCategories, getFilterJokes } from "../../actions";
import { connect } from "react-redux";
import JokeList from "../../components/joke/JokeList";
import JokeItem from "../../components/joke/JokeItem";
import Loading from "../../components/loading/Loading";

const Home = ({
  filterJokes,
  isFetching,
  categories,
  getAllJokes,
  getCategories,
  getFilterJokes,
}) => {
  const isEmpty = filterJokes.length === 0;
  let [count, setCount] = useState(5);

  useEffect(() => {
    getAllJokes();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJokes = (category) => {
    getFilterJokes(category);
  };

  return (
    <>
      <div className="categories-list">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => getJokes(category.value)}
            className="categories-btn"
          >
            {category.name}
          </button>
        ))}
        <button className="categories-btn" onClick={() => getJokes("all")}>
          VIEW ALL
        </button>
      </div>
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
            .map((joke) => <JokeItem key={joke.id} joke={joke} />)
        )}
      </JokeList>
      <button
        onClick={() => {
          if (count < filterJokes.length) {
            console.log("Ok");
            setCount((count += 6));
          }
        }}
      >
        Show more
      </button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
