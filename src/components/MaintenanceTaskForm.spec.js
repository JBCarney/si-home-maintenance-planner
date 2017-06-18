import React from 'react';
import { shallow } from 'enzyme';
import MaintenanceTaskForm from './MaintenanceTaskForm';
import MaintenanceTaskTextInput from './MaintenanceTaskTextInput';

describe('<MaintenanceTaskForm />', () => {
  it('should contain <MaintenanceTaskTextInput /> components', () => {
    const createMaintenanceTask = () => {
    };
    const saveMaintenanceTask = () => {
    };
    const completeMaintenanceTask = () => {
    };

    const maintenanceTask = {
      name: 'Fix Sink',
      dateCreated: '06-17-2017',
      dateDue: null,
      dateModified: null,
      dateCompleted: null,
      completed: false,
      notes: null
    };

    const wrapper = shallow(<MaintenanceTaskForm
      createMaintenanceTask={createMaintenanceTask}
      saveMaintenanceTask={saveMaintenanceTask}
      completeMaintenanceTask={completeMaintenanceTask}
      maintenanceTask={maintenanceTask}
    />);
    const allInputs = wrapper.find(MaintenanceTaskTextInput);

    expect(allInputs.length).toEqual(5);
    expect(allInputs.at(0).props().name).toEqual('name');
    expect(allInputs.at(0).props().value).toEqual(maintenanceTask.name);
    expect(allInputs.at(1).props().name).toEqual('dateCreated');
    expect(allInputs.at(1).props().value).toEqual(maintenanceTask.dateCreated);
    expect(allInputs.at(2).props().name).toEqual('dateDue');
    expect(allInputs.at(2).props().value).toEqual(maintenanceTask.dateDue);
    expect(allInputs.at(3).props().name).toEqual('dateModified');
    expect(allInputs.at(3).props().value).toEqual(maintenanceTask.dateModified);
    expect(allInputs.at(4).props().name).toEqual('dateCompleted');
    expect(allInputs.at(4).props().value).toEqual(maintenanceTask.dateCompleted);
    expect(allInputs.at(5).props().name).toEqual('completed');
    expect(allInputs.at(5).props().value).toEqual(maintenanceTask.completed);
    expect(allInputs.at(6).props().name).toEqual('notes');
    expect(allInputs.at(6).props().value).toEqual(maintenanceTask.notes);
  });

  it('should contain <MaintenanceTask /> when necessary conditions are met', () => {
    const createMaintenanceTask = () => {
    };
    const saveMaintenanceTask = () => {
    };
    const completeMaintenanceTask = () => {
    };
    const maintenanceTask = {
      name: 'Fix Sink',
      dateCreated: '06-17-2017',
      dateDue: null,
      dateModified: null,
      dateCompleted: null,
      completed: false,
      notes: null
    };

    const wrapper = shallow(<MaintenanceTaskForm
      createMaintenanceTask={createMaintenanceTask}
      saveMaintenanceTask={saveMaintenanceTask}
      completeMaintenanceTask={completeMaintenanceTask}
      maintenanceTask={maintenanceTask}
    />);
    const expected = <MaintenanceTask maintenanceTask={maintenanceTask.name} />;

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should not contain <MaintenanceTask /> when necessary conditions are not met', () => {
    const createMaintenanceTask = () => {
    };
    const saveMaintenanceTask = () => {
    };
    const completeMaintenanceTask = () => {
    };
    const maintenanceTask = {
      name: 'Fix Sink',
      dateCreated: '06-17-2017',
      dateDue: null,
      dateModified: null,
      dateCompleted: null,
      completed: false,
      notes: null
    };

    const wrapper = shallow(<MaintenanceTaskForm
      createMaintenanceTask={createMaintenanceTask}
      saveMaintenanceTask={saveMaintenanceTask}
      completeMaintenanceTask={completeMaintenanceTask}
      maintenanceTask={maintenanceTask}
    />);
    const expected = <MaintenanceTask name={maintenanceTask.name} />;

    expect(wrapper.contains(expected)).toBeFalsy();
  });

  it('should handle form submit', () => {
    const createMaintenanceTask = () => {
    };
    const saveMaintenanceTask = jest.fn();
    const completeMaintenanceTask = () => {
    };
    const maintenanceTask = {
      name: 'Fix Sink',
      dateCreated: '06-17-2017',
      dateDue: null,
      dateModified: null,
      dateCompleted: null,
      completed: false,
      notes: ''
    };

    const wrapper = shallow(<MaintenanceTaskForm
      createMaintenanceTask={saveMaintenanceTask}
      saveMaintenanceTask={saveMaintenanceTask}
      completeMaintenanceTask={completeMaintenanceTask}
      maintenanceTask={maintenanceTask}
    />);

    expect(saveMaintenanceTask).not.toBeCalled();
    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveMaintenanceTask).toBeCalled();
  });

  it('should submit appState', () => {
    const createMaintenanceTask = () => {
    };
    const saveMaintenanceTask = jest.fn();
    const completeMaintenanceTask = () => {
    };
    const maintenanceTask = {
      name: 'Fix Sink',
      dateCreated: '06-17-2017',
      dateDue: null,
      dateModified: null,
      dateCompleted: null,
      completed: false,
      notes: ''
    };

    const wrapper = shallow(<MaintenanceTaskForm
      saveMaintenanceTask={saveMaintenanceTask}
      completeMaintenanceTask={completeMaintenanceTask}
      maintenanceTask={maintenanceTask}
    />);

    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveMaintenanceTask).toBeCalledWith(maintenanceTask);
  });
});
