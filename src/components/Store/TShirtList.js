// TShirtList.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';
import { Button, Col, Form ,Row} from 'react-bootstrap';

const TShirtList = (props) => {
  const [selectedTshirt, setSelectedTshirt] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const cartCtx = useContext(CartContext);



  const handleTshirtClick = (tshirt) => {
    setSelectedTshirt(tshirt);
    setSelectedSize(''); // Reset selected size when a new t-shirt is selected
  };



  const handleAddToCart = () => {
    if (selectedTshirt && selectedSize) {
      const selectedSizeData = selectedTshirt.sizes.find(
        (size) => size.name === selectedSize
      );

      if (selectedSizeData.quantity > 0) {
        const itemToAdd = {
            id: selectedTshirt.id,
            tshirt: selectedTshirt.tshirt,
            price: selectedTshirt.price,
            size: selectedSize,
          };
  
          cartCtx.addToCart(itemToAdd);
  



        // Reduce the selected size quantity in the local state
        setSelectedTshirt((prev) => ({
          ...prev,
          sizes: prev.sizes.map((size) =>
            size.name === selectedSize
              ? { ...size, quantity: size.quantity - 1 }
              : size
          ),
        }));
      }
    }
  };


  return (
    <>
      <div className='TShirtList m-5'>
        <h2>T-Shirt List</h2>
        <ul>
          {props.tshirts &&
            props.tshirts.map((tshirt) => (
              <li
                key={tshirt.id}
                className={`TShirtListItem ${
                  selectedTshirt && selectedTshirt.id === tshirt.id
                    ? 'selected'
                    : ''
                }`}
              >
                <div onClick={() => handleTshirtClick(tshirt)}>
                <Row>
                <Col>
                 <h5 className='TShirtName'>{tshirt.tshirt}</h5>
                  <div className='TShirtDescription'>{tshirt.description}</div>
                  <h6 className='TShirtPrice'>{`$${tshirt.price.toFixed(2)}`}</h6>
                  </Col>
                  
                </Row>
                </div>
                {selectedTshirt && selectedTshirt.id === tshirt.id && (
                  <div>
                    <Form.Group controlId='sizeSelect'>
                      <Form.Label>Select Size:</Form.Label>
                      <Form.Control
                        as='select'
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                      >
                        <option value=''>Choose Size</option>
                        {selectedTshirt.sizes.map((size) => (
                          <option
                            key={size.name}
                            value={size.name}
                            disabled={size.quantity === 0}
                          >
                            {`Size ${size.name} ${
                              size.quantity > 0
                                ? `(${size.quantity} in stock)`
                                : '(No items available)'
                            }`}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <Button
                      variant='primary'
                      onClick={handleAddToCart}
                      disabled={
                        !selectedSize ||
                        selectedTshirt.sizes.find((size) => size.name === selectedSize)
                          ?.quantity === 0
                      }
                    >
                      {!selectedSize
                        ? 'Select Size'
                        : selectedTshirt.sizes.find(
                            (size) => size.name === selectedSize
                          )?.quantity === 0
                        ? 'Out of Stock'
                        : 'Add to Cart'}
                    </Button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default TShirtList;
