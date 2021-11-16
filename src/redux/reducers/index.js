import { combineReducers } from 'redux';
import locationsArrayReducer from './locationsArrayReducer';

export default combineReducers({
  locationsArray: locationsArrayReducer,
});
