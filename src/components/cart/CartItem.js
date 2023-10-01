// CartItem.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const CartItem = (props) => {
  const handleRemove = () => {
    props.onRemove();
  };

  const handleAdd = () => {
    props.onAdd();
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <div>
        <h5>{props.tshirt}</h5>
        <div className='d-flex'>
        <h5 className='ml-4'>${(props.quantity * Number(props.price)).toFixed(2)}</h5>
      
          <Container className="quantity-badge">
            {`x ${props.quantity}`}
          </Container>
        </div>
      </div>
      <div>
        <Button variant='outline-secondary' onClick={handleRemove}>
          -
        </Button>
        <span className='mx-2'>{props.quantity}</span>
        <Button variant='outline-secondary' onClick={handleAdd}>
          +
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
