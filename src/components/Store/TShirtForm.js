import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Form, Button } from 'react-bootstrap';

const TShirtForm = (props) => {
  const tshirtNameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const [tshirtSize, setTshirtSize] = useState({ name: '', quantity: 0 });

  const handleSubmit = (event) => {
    event.preventDefault();

    const tshirtName = tshirtNameRef.current.value;
    const description = descriptionRef.current.value;
    const price = parseFloat(priceRef.current.value);

    if (!tshirtName || !description || isNaN(price)) {
      toast.error('Please fill in all fields!');
      return;
    }

    const tshirt = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      tshirt: tshirtName,
      description,
      price,
      sizes: [tshirtSize],
    };

    props.onAddTShirt(tshirt);

    // Reset form fields and selected size
    tshirtNameRef.current.value = '';
    descriptionRef.current.value = '';
    priceRef.current.value = '';
    setTshirtSize({ name: '', quantity: 0 });

    toast.success('T-Shirt added!');
  };

  const handleSizeChange = (field, value) => {
    setTshirtSize((prevSize) => ({
      ...prevSize,
      [field]: value,
    }));
  };

  return (
    <Container>
      <div className='m-5'>
        <Form className='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='tshirt' className='form-label'>
              T-Shirt Name
            </label>
            <input
              type='text'
              className='form-control'
              id='tshirt'
              ref={tshirtNameRef}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <input
              type='text'
              className='form-control'
              id='description'
              ref={descriptionRef}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='price' className='form-label'>
              Price
            </label>
            <input
              type='number'
              className='form-control'
              id='price'
              ref={priceRef}
            />
          </div>
          <div className='d-flex'>
            <div className='flex-grow-1 me-2'>
              <label htmlFor='size' className='form-label'>
                Size
              </label>
              <select
                className='form-select'
                id='size'
                value={tshirtSize.name}
                onChange={(e) => handleSizeChange('name', e.target.value)}
              >
                <option value=''>Select a size</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
              </select>
            </div>
            <div className='flex-grow-1 ms-2'>
              <label htmlFor='quantity' className='form-label'>
                Quantity
              </label>
              <input
                type='number'
                className='form-control'
                id='quantity'
                placeholder='Quantity'
                value={tshirtSize.quantity}
                onChange={(e) =>
                  handleSizeChange('quantity', parseInt(e.target.value, 10))
                }
              />
            </div>
          </div>
          <Button type='submit' className='btn btn-primary mt-3'>
            Add T-Shirt
          </Button>
        </Form>
        <ToastContainer position='bottom-center' autoClose={1000} />
      </div>
    </Container>
  );
};

export default TShirtForm;
