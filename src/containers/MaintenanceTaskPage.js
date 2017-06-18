import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/maintenanceTaskActions';
import MaintenanceTaskForm from '../components/MaintenanceTaskForm';

export const MaintenanceTaskPage = (props) => {
  return (
    <MaintenanceTaskForm
      saveMaintenanceTask={props.actions.saveMaintenanceTask}
    />
  );
};

MaintenanceTaskPage.propTypes = {
  actions: PropTypes.object.isRequired,
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
