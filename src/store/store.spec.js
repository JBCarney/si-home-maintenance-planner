import * as ActionTypes from '../constants/actionTypes';
import MockDate from 'mockdate';
import { createStore } from 'redux';
import {getFormattedDateTime} from '../utils/dateHelper';
import initialState from '../reducers/initialState';
import rootReducer from '../reducers';

describe('Store', () => {
  let dateModified;
  beforeAll(() => {
    // hardcoded date for consistency in tests and snapshots on all machines
    MockDate.set(new Date("6/17 14:14:01"));
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'name', value: 'Fix AC' },
      { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateCreated', value: '6/17 14:14:01' },
      { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateDue', value: '6/20 12:12:01' },
      { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateModified', value: '6/17 14:14:01' },
      { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateCompleted', value: null },
      { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'completed', value: false },
      { type: ActionTypes.CREATE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'notes', value: 'Fix the Air Conditioning unit.' }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      name: 'Fix AC',
      dateCreated: '6/17 14:14:01',
      dateDue: '6/20 12:12:01',
      dateModified: '6/17 14:14:01',
      dateCompleted: null,
      completed: false,
      notes: 'Fix the Air Conditioning unit.'
    };

    expect(actual).toEqual(expected);
  });

  it('should not display results when necessary data is not provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'name', value: 'Fix AC' },
      { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateCreated', value: '6/17 14:14:01' },
      { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateDue', value: '6/20 12:12:01' },
      { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateModified', value: '6/17 14:14:01' },
      { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateCompleted', value: null },
      { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'completed', value: false },
      { type: ActionTypes.SAVE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'notes', value: 'Fix the Air Conditioning unit.' }
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
      name: 'Fix AC',
      dateCreated: '6/17 14:14:01',
      dateDue: '6/20 12:12:01',
      dateModified: '6/17 14:14:01',
      dateCompleted: null,
      completed: false,
      notes: 'Fix the Air Conditioning unit.'
    };

    expect(actual).toEqual(expected);

    it('should not display results when necessary data is not provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'name', value: 'Fix AC' },
      { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateCreated', value: '6/17 14:14:01' },
      { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateDue', value: '6/20 12:12:01' },
      { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateModified', value: '6/17 14:14:01' },
      { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'dateCompleted', value: null },
      { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'completed', value: false },
      { type: ActionTypes.COMPLETE_MAINTENANCE_TASK, dateModified, settings: store.getState(), fieldName: 'notes', value: 'Fix the Air Conditioning unit.' }
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
      name: 'Fix AC',
      dateCreated: '6/17 14:14:01',
      dateDue: '6/20 12:12:01',
      dateModified: '6/17 14:14:01',
      dateCompleted: null,
      completed: false,
      notes: 'Fix the Air Conditioning unit.'
    };

    expect(actual).toEqual(expected);
  });



  });
});
