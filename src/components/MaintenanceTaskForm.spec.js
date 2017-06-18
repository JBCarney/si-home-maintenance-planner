import React from 'react';
import { shallow } from 'enzyme';
import MaintenanceTaskForm from './MaintenanceTaskForm';
import MaintenanceTaskTextInput from './MaintenanceTaskTextInput';

describe('<MaintenanceTaskForm />', () => {
  it('should contain <MaintenanceTaskTextInput /> components', () => {
    const saveMaintenanceTask = () => {
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
      saveMaintenanceTask={saveMaintenanceTask}
    />);
    const allInputs = wrapper.find(MaintenanceTaskTextInput);

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
});
