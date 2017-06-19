import React from 'react';
//import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <main className="clearfix">
      <figure className="banner">
        <img src="./images/about.png" alt="banner of a mansion" />
      </figure>

      <h1>About</h1>
      <hr className="fadeAway" />

      <div className="blog">
        <article>
          <h3>Snap Interactive Home Maintenance Planner</h3>
          <p>I am creating with the intention of not only creating a working application,
            but also to document my process of how I orchestrate different frameworks,
            tools and platforms together with specific development patterns that record the
            history and progress of the application. Frequent checkins along with BDD unit and
            integration testing (I will not be covering functional testing) will show, step-by-step,
            the development of this application.It is not often that I get to create a brand new
            application with all of my current favorites, and two new technologies (Sequelize and SQLite).
          </p>
        </article>
      </div>
    </main>
  );
};

export default AboutPage;
