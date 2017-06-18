import * as ActionTypes from '../constants/actionTypes';
import reducer from './maintenanceTaskReducer';
import { getFormattedDateTime } from '../utils/dateHelper';

describe('Reducers::MaintenanceTask', () => {
  const getInitialState = () => {
    return {
      maintenanceTask: {
      name: 'Fix AC',
      dateCreated: '6/17 14:14:01',
      dateDue: '6/20 12:12:01',
      dateModified: '6/17 14:14:01',
      dateCompleted: null,
      completed: false,
      notes: 'Fix the Air Conditioning unit.'
      }
    };
  };

  const getAppState = () => {
    return {
      name: 'Fix AC',
      dateCreated: '6/17 14:14:01',
      dateDue: '6/20 12:12:01',
      dateModified: '6/17 14:14:01',
      dateCompleted: null,
      completed: false,
      notes: 'Fix the Air Conditioning unit.'
    };
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle CREATE_MAINTENANCE_TASK', () => {
    const action = { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateModified });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle SAVE_MAINTENANCE_TASK', () => {
    const action = { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateModified });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle COMPLETE_MAINTENANCE_TASK', () => {
    const action = { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateModified });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });
});
