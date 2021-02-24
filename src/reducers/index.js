import { combineReducers } from 'redux';
import postsReducer from './postReducers';
import usersReducer from './userReducers';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});