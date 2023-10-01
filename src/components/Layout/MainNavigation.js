import React, { useContext } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Cart from '../cart/Cart';
import { CartContext } from '../../context/CartProvider';

const MainNavigation = () => {
  
  const location = useLocation();
  const cartCtx = useContext(CartContext);

  const isStoreRoute = () => {
    return location.pathname === '/store';
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' fixed='top'>
        <Container>
          <Nav className='mx-auto'>
            <NavLink to='/home' className='nav-link mx-5'>
              HOME
            </NavLink>
            <NavLink to='/store' className='nav-link mx-5'>
              STORE
            </NavLink>
            <NavLink to='/about' className='nav-link mx-5'>
              ABOUT
            </NavLink>
          </Nav>
          {isStoreRoute() && (
            <>
            
              <Cart cartItems={cartCtx.cartItems} />
              
            </>

          )}
          
        </Container>
      </Navbar>
      <br />
    </header>
  );
};

export default MainNavigation;
