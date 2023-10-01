import React, { useState } from 'react';
import TShirtForm from '../Store/TShirtForm';
import TShirtList from '../Store/TShirtList';

const StorePage = () => {
  const [tshirts, setTshirts] = useState([]);

  const handleAddTShirt = (tshirt) => {
    setTshirts((prevTshirts) => [...prevTshirts, tshirt]);
  };

  const handleAddToCart = (tshirtId) => {
    console.log('T-Shirt added to cart with ID:', tshirtId);
  };

  return (
    <div>
      <TShirtForm onAddTShirt={handleAddTShirt} />
      <TShirtList tshirts={tshirts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default StorePage;
