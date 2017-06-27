import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions/maintenanceTaskActions';

class MaintenanceTaskForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      maintenanceTask: {
        _id: "",
        staffMemberName: "",
        taskTitle: "",
        taskDescription: "",
        taskCompleted: false
      }
    }

    this.onStaffMemberNameChange = this.onStaffMemberNameChange.bind(this);
    this.onTaskTitleChange = this.onTaskTitleChange.bind(this);
    this.onTaskDescriptionChange = this.onTaskDescriptionChange.bind(this);
    this.onClickCreate = this.onClickCreate.bind(this);
    //this.save = this.save.bind(this);
  }

  onStaffMemberNameChange(event) {
    const maintenanceTask = this.state.maintenanceTask;
    maintenanceTask.staffMemberName = event.target.value;
    this.setState({maintenanceTask: maintenanceTask});
  }

  onTaskTitleChange(event) {
    const maintenanceTask = this.state.maintenanceTask;
    maintenanceTask.taskTitle = event.target.value;
    this.setState({maintenanceTask: maintenanceTask});
  }

  onTaskDescriptionChange(event) {
    const maintenanceTask = this.state.maintenanceTask;
    maintenanceTask.taskDescription = event.target.value;
    this.setState({maintenanceTask: maintenanceTask});
  }

  onClickCreate() {
    this.props.dispatch(createMaintenanceTask(this.state.maintenanceTask));
  }

  save() {
    this.props.saveMaintenanceTask(this.props.maintenanceTask);
  }

  //maintenanceTaskRow()

  render() {
    return (
      <div>
        <h2>Create a new task</h2>
        <div className="create">
          <input type="text" name="newStaffMemberName" onChange={this.onStaffMemberNameChange} value={this.state.maintenanceTask.staffMemberName} />
          <input type="text" name="newTaskTitle" onChange={this.onTaskTitleChange} value={this.state.maintenanceTask.taskTitle} />
          <input type="text" name="newTaskDescription" onChange={this.onTaskDescriptionChange} value={this.state.maintenanceTask.taskDescription} />
          <input type="submit" name="createNewTask" onClick={this.onClickCreate} value="CREATE TASK" />
        </div>
        <h1>Home Maintenance Tasks</h1>
        <hr className="fadeAway" />

        <h2>Genevieve <i className="fa fa-trash-o" onClick="" aria-hidden="true"></i></h2>
        <div className="blog">
          <article>
            <h3>Fix the AC Unit <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? porta placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursusnon porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enim. Add additional words so that it
                    is taller than the one to the right.</p>
          </article>
          <article>
            <h3>Repair Kids Bathroom Sink <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? porta placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enim</p>
          </article>
          <article>
            <h3>Get New Gloves for Jeeves <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? porta placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enimElementum, sagittis adipiscing,
                    nec et? Ridiculus, porta placerat ultrices odio diam in, urna phasellus in ac egestas egestas nunc, pellentesque,
                    non porta, nisi turpis. Ultricies integer sociis etiam ultrices dis facilisis nascetur. Pellentesque
                    cursus integer mauris augue enim</p>
          </article>
        </div>
        <h2>Jordan <i className="fa fa-trash-o" onClick="" aria-hidden="true"></i></h2>
        <h4>Create a new Task</h4>
        <div className="create">
          <input type="text" name="newTask" />&nbsp;
        <input type="button" name="createNewTask" value="CREATE" />
        </div>
        <div className="blog">
          <article>
            <h3>Wash the Cars, All of them <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? porta placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enim</p>
          </article>
          <article>
            <h3>Replace 70" 4K TV <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? porta placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enim</p>
          </article>
          <article>
            <h3>Clean the Pool <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? porta placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enim</p>
          </article>
          <article>
            <h3>Clean the Garage, Both of them <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? porta placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enim</p>
          </article>
          <article>
            <h3>Take a nap <i className="fa fa-window-close-o" aria-hidden="true"></i></h3>
            <p>Elementum, sagittis adipiscing, nec et? placerat ultrices odio diam in, urna phasellus in
                    ac egestas egestas nunc, pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam ultrices
                    dis facilisis nascetur. Pellentesque cursus integer mauris augue enim</p>
          </article>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    maintenanceTasks: state.maintenanceTasks
  }
}

MaintenanceTaskForm.propTypes = {
  //saveMaintenanceTask: PropTypes.func.isRequired,
  maintenanceTask: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MaintenanceTaskForm);
