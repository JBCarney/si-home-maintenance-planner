import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/maintenanceTaskActions';
import MaintenanceTaskForm from '../components/MaintenanceTaskForm';

export const HomePage = (props) => {
  return (
    <main className="clearfix">
      <figure className="banner">
        <img src="./images/home.png" alt="banner of a mansion" />
      </figure>
      <MaintenanceTaskForm
        maintenanceTask={props.maintenanceTask}
      />
    </main>
  );
};

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  maintenanceTask: PropTypes.object.isRequired
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
)(HomePage);
