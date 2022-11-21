import axios from "axios";

const API_URL = "https://api.chucknorris.io/jokes";

const getAll = () => {
    return axios.get(API_URL + '/search', {
        params: {
            query: 'all'
        }
    });
}

const getCategories = () => {
    return axios.get(API_URL + '/categories')
}

const JokeService = {
    getAll,
    getCategories,
}

export default JokeService;