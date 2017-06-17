import React from 'react';
import {shallow} from 'enzyme';
import {MaintenanceTaskPage} from './MaintenanceTaskPage';
import MaintenanceTaskForm from '../components/MaintenanceTaskForm';

describe('<MaintenanceTaskPage />', () => {
  it('should contain <MaintenanceTaskForm />', () => {
    const actions = {
      saveMaintenanceTask: () => { },
      completeMaintenanceTask: () => { }
    };
    const maintenanceTask = {};
    const wrapper = shallow(<MaintenanceTaskPage actions={actions} taskName={taskName}/>);

    expect(wrapper.find(MaintenanceTaskForm).length).toEqual(1);
  });
});
