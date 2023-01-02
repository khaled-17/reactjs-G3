import { combineReducers } from 'redux';
import counterReducer from './counter';
import changelowcost from './counter';
// import favMoviesReducer from './favmovies';
// import  moviesReducer  from './movies';
import { changehightcost,changTotal } from './../actions/counter';


export default combineReducers({
    counter: counterReducer,
    changelowcost:changelowcost,
    changehightcost:changehightcost,
    changTotal:changTotal,
     
})