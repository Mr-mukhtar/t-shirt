import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import StorePage from './components/pages/StorePage';
import Layout from './components/Layout/Latout';
import {CartProvider } from './context/CartProvider';


function App() {
  return (
    <CartProvider>
    <Layout>
      <main>
        <Switch>
          <Route path='/' exact>
          
          </Route>
            <Route path='/home' >
            <HomePage />
          </Route>

          <Route path='/store'>
            <StorePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
        </Switch>
      </main>
    </Layout>
    </CartProvider>
  );
}

export default App;
