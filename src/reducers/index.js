import {combineReducers} from 'redux';
import maintenanceTasks from './maintenanceTaskReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  maintenanceTasks,
  routing: routerReducer
});

export default rootReducer;
