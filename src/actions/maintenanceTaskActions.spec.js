import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './maintenanceTaskActions';
import MockDate from 'mockdate';
import {getFormattedDateTime} from '../utils/dateHelper';

describe('Actions', () => {
  let dateModified;
  beforeAll(() => {
    MockDate.set(new Date());
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());

  const appState = {
    name: 'Fix AC',
      dateCreated: '6/17 14:14:01',
      dateDue: '6/20 12:12:01',
      dateModified: '6/17 14:14:01',
      dateCompleted: null,
      completed: false,
      notes: 'Fix the Air Conditioning unit.'
  };

  it('should save the changes to the maintenance task', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.SAVE_MAINTENANCE_TASK,
      dateModified,
      settings: appState
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveMaintenanceTask(appState))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.saveMaintenanceTask(appState)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create a maintenance task', () => {
    const fieldName = 'newMpg';
    const value = 100;
    const actual = ActionCreators.createMaintenanceTask(appState, fieldName, value);
    const expected = {
      type: ActionTypes.CREATE_MAINTENANCE_TASK,
      dateModified,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).toEqual(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });

  it('should complete a maintenance task', () => {
    const fieldName = 'newMpg';
    const value = 100;
    const actual = ActionCreators.completeMaintenanceTask(appState, fieldName, value);
    const expected = {
      type: ActionTypes.COMPLETE_MAINTENANCE_TASK,
      dateModified,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).toEqual(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});
