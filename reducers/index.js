import fetchReducer from './fetchReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  weatherReducer: fetchReducer,
});

export default reducers;
