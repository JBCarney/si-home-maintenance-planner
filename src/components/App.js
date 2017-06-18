import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Snap Interactive Home Maintenance Planner</h1>
        </header>
        <nav className="clearfix">
          <ul>
            <li className="active"><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/maintenance-task">Add Task</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        {this.props.children}
        <footer>
          <p>&copy;2017 Snap Interactive &bull; <a target="_blank" href="https://github.com/JBCarney/si-home-maintenance-planner">GitHub:SI Home Maintenance Planner</a></p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
