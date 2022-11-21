import * as types from '../constants/ActionTypes';
import JokeService from '../services/joke.service';

export const getAllJokes = () => async (dispatch) => {
    try {
        const res = await JokeService.getAll();

        dispatch({
            type: types.GET_ALL_JOKES,
            payload: res.data.result,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getCategories = () => async (dispatch) => {
    try {
        const res = await JokeService.getCategories();
        var data = [];
        res.data.forEach(item => {
            data.push({
                name: item.toUpperCase() + " JOKES",
                value: item,
            })
        });

        data.push({
            name: "UNCATEGORIES JOKES",
            value: "uncategories",
        })

        dispatch({
            type: types.GET_CATEGORIES,
            payload: data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getFilterJokes = (category) => {
    return ({
        type: types.GET_FILTER_JOKES,
        payload: category,
    })
}