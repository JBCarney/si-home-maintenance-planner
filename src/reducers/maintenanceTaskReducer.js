import { CREATE_MAINTENANCE_TASK, SAVE_MAINTENANCE_TASK, COMPLETE_MAINTENANCE_TASK } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function maintenanceTaskReducer(state = initialState.maintenanceTask, action) {
  let newState;

  switch (action.type) {
    case CREATE_MAINTENANCE_TASK:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in maintenanceTaskActions.js
      return objectAssign({}, state, { dateCreated: action.dateCreated });

    case SAVE_MAINTENANCE_TASK:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in maintenanceTaskActions.js
      return objectAssign({}, state, { dateModified: action.dateModified });

    case COMPLETE_MAINTENANCE_TASK:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.dateModified = action.dateModified;
      newState.dateCompleted = action.dateCompleted;

      return newState;

    default:
      return state;
  }
}
