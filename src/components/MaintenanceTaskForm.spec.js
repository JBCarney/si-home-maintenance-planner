import React from 'react';
import { shallow } from 'enzyme';
import MaintenanceTaskForm from './MaintenanceTaskForm';

describe('<MaintenanceTaskForm />', () => {
  it('should contain <MaintenanceTaskTextInput /> components', () => {
    const saveMaintenanceTask = () => {
    };

    const maintenanceTask = {
      name: 'Fix AC',
      dateCreated: '6/17 14:14:01',
      dateDue: '6/20 12:12:01',
      dateModified: '6/17 14:14:01',
      dateCompleted: null,
      completed: false,
      notes: 'Fix the Air Conditioning unit.'
    };

    const wrapper = shallow(<MaintenanceTaskForm
      saveMaintenanceTask={saveMaintenanceTask}
    />);
    const allInputs = wrapper.find(MaintenanceTaskForm);

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
