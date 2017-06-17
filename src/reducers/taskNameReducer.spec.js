import * as ActionTypes from '../constants/actionTypes';
import reducer from './maintenanceTaskReducer';
import { getFormattedDateTime } from '../utils/dateHelper';

describe('Reducers::MaintenanceTask', () => {
  const getInitialState = () => {
    return {
      maintenanceTask: {
        name: '',
        createdDate: null,
        dueDate: null,
        modifiedDate: null,
        completedDate: null,
        completed: false,
        notes: ''
      }
    };
  };

  const getAppState = () => {
    return {
      name: 'Fix Sink',
      createdDate: '06-17-2017',
      dueDate: null,
      modifiedDate: null,
      completedDate: null,
      completed: false,
      notes: ''
    };
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle CREATE_MAINTENANCE_TASK', () => {
    const action = { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateCreated, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateCreated });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle SAVE_MAINTENANCE_TASK', () => {
    const action = { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateModified });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle COMPLETE_MAINTENANCE_TASK', () => {
    const action = { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateCompleted, settings: getAppState(), fieldName: 'completedDate', value: '06-17-2017' };

    const dateCompleted = '06-17-2017';
    const completed = true;

    expect(reducer(getAppState(), action).dateCompleted).toEqual(dateCompleted);
    expect(reducer(getAppState(), action).completed).toEqual(completed);
  });
});
