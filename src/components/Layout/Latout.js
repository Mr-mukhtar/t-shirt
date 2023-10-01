import React, { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <MainNavigation />
      </header>
  <br/> 
  <br/>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
