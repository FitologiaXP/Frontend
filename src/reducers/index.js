import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';

export const Reducers = combineReducers({
  sessionState: sessionReducer
});