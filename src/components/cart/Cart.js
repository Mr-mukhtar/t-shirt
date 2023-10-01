// Cart.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartProvider';
import { Container } from 'react-bootstrap'; // Import Container
const Cart = () => {
  const {
    cartItems,
    totalQuantity,
    totalAmount,
    removeFromCart,
    incrementQuantityAction,
    decrementQuantityAction,
    orderHandler
  } = useCart();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='ml-auto'>
      <Button variant='primary' onClick={handleShow}>
        <div className='p-1 flex-column'>
          {' '}
          Cart {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </div>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        {cartItems && cartItems.length > 0 ? (
          <Modal.Body>
            <ul className='list-group'>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className='list-group-item d-flex justify-content-between align-items-center'
                >
                  <div>
                    <h5>{item.tshirt}</h5>
                    <div className='d-flex'>
                      <h5 className='ml-4'>
                        ${(item.quantity * Number(item.price)).toFixed(2)}
                      </h5>
                      <Container className='quantity-badge'>{`x ${item.quantity}`}</Container>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant='outline-secondary'
                      onClick={() => decrementQuantityAction(item)}
                    >
                      -
                    </Button>
                    <span className='mx-2'>{item.quantity}</span>
                    <Button
                      variant='outline-secondary'
                      onClick={() => incrementQuantityAction(item)}
                    >
                      +
                    </Button>
                  </div>
                  <button
                    className='btn btn-danger'
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className='d-flex justify-content-between mt-3'>
              <h2>Total Amount</h2>
              <h3>${totalAmount.toFixed(2)}</h3>
            </div>
          </Modal.Body>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose} style={{marginRight:"30px"}}>
            Close
          </Button>
          {cartItems.length > 0 && (
            <Button variant='primary' className='m-2' onClick={orderHandler}>
              Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
