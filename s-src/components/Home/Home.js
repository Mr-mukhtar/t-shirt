import React from 'react';
import Store from '../Store/Store';
import ProductList from '../Store/Product';

const Home = () => {
  return <div>
     <div>Welcome to our T-Shirt Store</div>;
  <Store/>
  <ProductList/>
  </div>
};

export default Home;
