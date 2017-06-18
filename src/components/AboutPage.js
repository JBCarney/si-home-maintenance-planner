import React from 'react';
import {Link} from 'react-router';
import '../styles/styles.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This is the Snap Interactive full-stack home maintenance planner.<br/>
        <a href="https://github.com/JBCarney/si-home-maintenance-planner">GitHub</a> Repo.
      </p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
