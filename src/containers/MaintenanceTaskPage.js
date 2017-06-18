import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/MaintenanceTaskActions';
import MaintenanceTaskForm from '../components/MaintenanceTaskForm';

export const MaintenanceTaskPage = (props) => {
  return (
    <MaintenanceTaskForm
      createMaintenanceTask={props.actions.saveMaintenanceTask}
      saveMaintenanceTask={props.actions.saveMaintenanceTask}
      completeMaintenanceTask={props.actions.completeMaintenanceTask}
      maintenanceTask={props.maintenanceTask}
    />
  );
};

MaintenanceTaskPage.propTypes = {
  actions: PropTypes.object.isRequired,
  taskName: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    maintenanceTask: state.maintenanceTask
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintenanceTaskPage);
