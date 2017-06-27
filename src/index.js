/* eslint-disable import/default */
import fs from 'fs';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss';
import './styles/styles.css';
import { syncHistoryWithStore } from 'react-router-redux';
import { MongoClient } from 'mongodb';

let db;
MongoClient.connect('mongodb://staffguest:StaffGuest@ds032340.mlab.com:32340/homemaintplannerdb', (err, database) => {
  if (err) throw err;
  db = database;
});

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
