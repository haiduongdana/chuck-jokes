import { useEffect } from "react";
import { getAllJokes, getCategories, getFilterJokes } from "../actions";
import { connect } from "react-redux";
import JokeList from "../components/JokeList";
import JokeItem from "../components/JokeItem";

const Home = ({ filterJokes, categories, getAllJokes, getCategories, getFilterJokes }) => {
    useEffect(() => {
        getAllJokes();
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getJokes = (category) => {
        getFilterJokes(category);
    }

    return (
        <>
            <div className="categories-list">
                {categories.map(category => (
                    <button key={category.value} onClick={() => getJokes(category.value)} className="categories-btn">{category.name}</button>
                ))}
                <button className="categories-btn"  onClick={() => getJokes("all")}>VIEW ALL</button>
            </div>
            <JokeList>
                {filterJokes.map(joke => (
                    <JokeItem key={joke.id} joke={joke}/>
                ))}
            </JokeList>
        </>
    )
}

const mapStateToProps = state => {
    return {
        filterJokes: state.filterJokes,
        categories: state.categories,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllJokes: () => dispatch(getAllJokes()),
        getCategories: () => dispatch(getCategories()),
        getFilterJokes: (category) => dispatch(getFilterJokes(category)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)