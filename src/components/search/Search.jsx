import { useState } from "react";
import Autosuggest from "react-autosuggest";
import { chooseJoke } from "../../actions";
import JokeService from "../../services/joke.service";
import theme from "./theme.module.scss";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Search = ({ chooseJoke }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const renderSuggestion = (suggestion) => {
    if (suggestions.length !== 0) {
      return (
        <p
          style={{
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {suggestion.value}
        </p>
      );
    } else {
      return <p>Not found</p>;
    }
  };
  const inputProps = {
    placeholder: "How can we make you laugh today?",
    value: search,
    style: {
      padding: "8px 16px",
      outline: "none",
      borderRadius: "6px",
      fontSize: "16px",
    },
    onChange: async (e, { newValue }) => {
      if (e.type === "change") {
        setSearch(newValue);
        try {
          const jokes = await JokeService.getJokes(newValue);
          setSuggestions(jokes.data.result ?? []);
        } catch (error) {
          setSuggestions([]);
        }
      }
    },
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (event, { suggestion }) => {
    if (!suggestion.isEmpty) {
      chooseJoke(suggestion);
      navigate("/joke");
    }
  };
  return (
    <Autosuggest
      theme={theme}
      getSuggestionValue={() => {}}
      onSuggestionSelected={getSuggestionValue}
      onSuggestionsFetchRequested={() => {}}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      suggestions={
        !suggestions.length && search.length > 3
          ? [{ isEmpty: true, value: "Not found" }]
          : suggestions
      }
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return { chooseJoke: (joke) => dispatch(chooseJoke(joke)) };
};

export default connect(null, mapDispatchToProps)(Search);
