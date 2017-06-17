import React from 'react';
import PropTypes from 'prop-types';
import MaintenanceTaskLoad from './MaintenanceTaskList';
import MaintenanceTaskTextInput from './MaintenanceTaskTextInput';

class MaintenanceTaskForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.maintenanceTaskKeypress = this.maintenanceTaskKeypress.bind(this);
  }

  onTimeframeChange(e) {
    this.props.completeMaintenanceTask(this.props.maintenanceTask, 'name', e.target.value);
  }

  maintenanceTaskKeypress(name, value) {
    this.props.completeMaintenanceTask(this.props.maintenanceTask, name, value);
  }

  save() {
    this.props.saveMaintenanceTask(this.props.maintenanceTask);
  }

  render() {
    const {maintenanceTask} = this.props;

    return (
      <div>
        <h2>Snap Interactive Home Maintenance Planner Task</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="name">Task Name</label></td>
            <td><MaintenanceTaskTextInput onChange={this.maintenanceTaskKeypress} name="name" value={maintenanceTask.name}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="completed">Task Completed</label></td>
            <td><MaintenanceTaskTextInput onChange={this.maintenanceTaskKeypress} name="completed" value={maintenanceTask.completed}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="notes">Task Notes</label></td>
            <td><MaintenanceTaskTextInput onChange={this.maintenanceTaskKeypress} name="notes" value={maintenanceTask.notes}/>
            </td>
          </tr>
          <tr>
            <td><label>Date Created</label></td>
            <td>{maintenanceTask.dateModified}</td>
          </tr>
          <tr>
            <td><label>Date Due to be Completed</label></td>
            <td>{maintenanceTask.dueDate}</td>
          </tr>
          <tr>
            <td><label>Date Modified</label></td>
            <td>{maintenanceTask.dateModified}</td>
          </tr>
          <tr>
            <td><label>Date Completed</label></td>
            <td>{maintenanceTask.dateCompleted}</td>
          </tr>
          </tbody>
        </table>
        <hr/>
        {maintenanceTask.necessaryDataIsProvidedToSaveTask && <MaintenanceTaskLoad name={maintenanceTask.name}/>}
        <input type="submit" value="Save Task" onClick={this.save}/>
      </div>
    );
  }
}

MaintenanceTaskForm.propTypes = {
  saveMaintenanceTask: PropTypes.func.isRequired,
  completeMaintenanceTask: PropTypes.func.isRequired,
  maintenanceTask: PropTypes.object.isRequired
};

export default MaintenanceTaskForm;
