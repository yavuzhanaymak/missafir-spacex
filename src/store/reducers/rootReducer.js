import {combineReducers} from 'redux';
import userReducer from './userReducer';
import launchesReducer from './launchesReducer';

export default combineReducers({
  user: userReducer,
  launches: launchesReducer,
});
