import { combineReducers } from 'redux';
import maintenanceTask from './maintenanceTaskReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  maintenanceTask,
  routing: routerReducer
});

export default rootReducer;
