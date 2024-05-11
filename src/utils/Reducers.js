import { combineReducers } from "redux";
import userReducer from "./uerSlice"
import moviesReducer from "./MovieSlice"


export const reducers = combineReducers({
    user: userReducer,
    movies: moviesReducer
})