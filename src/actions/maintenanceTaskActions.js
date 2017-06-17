import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function saveMaintenanceTask(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the maintenance task
    return dispatch({
      type: types.SAVE_MAINTENANCE_TASK,
      dateModified: getFormattedDateTime(),
      settings
    });
  };
}

export function completeMaintenanceTask(settings, fieldName, value) {
  return {
    type: types.COMPLETE_MAINTENANCE_TASK,
    dateModified: getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}
