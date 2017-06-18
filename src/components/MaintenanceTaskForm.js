import React from 'react';
import PropTypes from 'prop-types';

class MaintenanceTaskForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
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
            <td><input type="text" name="name" value={maintenanceTask.name}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="completed">Task Completed</label></td>
            <td><input type="text" name="completed" value={maintenanceTask.completed}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="notes">Task Notes</label></td>
            <td><input type="text" name="notes" value={maintenanceTask.notes}/>
            </td>
          </tr>
          <tr>
            <td><label>Date Created</label></td>
            <td>{maintenanceTask.dateModified}</td>
          </tr>
          <tr>
            <td><label>Date Due to be Completed</label></td>
            <td>{maintenanceTask.dateDue}</td>
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
        <input type="submit" value="Save Task" onClick={this.save}/>
      </div>
    );
  }
}

MaintenanceTaskForm.propTypes = {
  saveMaintenanceTask: PropTypes.func.isRequired//,
  //maintenanceTask: PropTypes.object.isRequired
};

export default MaintenanceTaskForm;
