import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function createMaintenanceTask(settings, fieldName, value) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the maintenance task
    return dispatch({
      type: types.CREATE_MAINTENANCE_TASK,
      dateCreated: getFormattedDateTime(),
      dateModified: getFormattedDateTime(),
      settings,
      fieldName,
      value
    });
  };
}

export function saveMaintenanceTask(settings, fieldName, value) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the maintenance task
    return dispatch({
      type: types.SAVE_MAINTENANCE_TASK,
      dateModified: getFormattedDateTime(),
      settings,
      fieldName,
      value
    });
  };
}

export function completeMaintenanceTask(settings, fieldName, value) {
  return {
    type: types.COMPLETE_MAINTENANCE_TASK,
    dateCompleted: getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}
