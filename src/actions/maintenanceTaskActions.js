import * as types from '../constants/actionTypes';
import {getFormattedDateTime} from '../utils/dateHelper';

export function createMaintenanceTask(maintenanceTask) {
  return { type: types.CREATE_MAINTENANCE_TASK, maintenanceTask};
}

export function saveMaintenanceTask(maintenanceTask) {
  return { type: types.SAVE_MAINTENANCE_TASK, maintenanceTask};
}

export function completeMaintenanceTask(maintenanceTask) {
  return { type: types.COMPLETE_MAINTENANCE_TASK, maintenanceTask};
}
