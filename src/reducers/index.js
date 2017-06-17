import { combineReducers } from 'redux';
import taskName from './taskNameReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  taskName,
  routing: routerReducer
});

export default rootReducer;
