// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import StorePage from './components/pages/StorePage';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          {/* Your component for the main/homepage goes here */}
          <HomePage />
        </Route>

        <Route path='/home'>
          <HomePage />
        </Route>

        <Route path='/store'>
          <StorePage />
        </Route>

        <Route path='/about'>
          <AboutPage />
        </Route>

        <Route path='*'>{/* Your 404 component goes here */}</Route>
      </Switch>
    </Layout>
  );
};

export default App;
