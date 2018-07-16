// we make a reducer for each type of data, and then we
// combine them all into one big reducer here.

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments,
    routing: routerReducer
});


export default rootReducer;
