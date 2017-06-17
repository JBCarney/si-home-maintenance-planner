import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Snap Interactive Full-Stack Home Maintenance Planner</h1>

      <h2>Overview</h2>
      <p>
        This is a simple home maintenance planner application that I am creating with the intention of not only
        creating a working application, but also to document my process of how I orchestrate different frameworks,
        tools and platforms together with specific development patterns that record the history and progress of the
        application. Frequent checkins along with BDD unit and integration testing
        (I will not be covering functional testing) will show, step-by-step, the development of this application.
        It is not often that I get to create a brand new application with all of my current favorites,
        and two new technologies (Sequelize and SQLite), so this is going to be fun!
      </p>
      <ol>
        <li>Manage the <Link to="task">Task</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
