import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div div assName="m-4 w-75 text-center">
     <Card className="m-4 w-75 text-center">
             <Card.Title className='text-center' >welcome</Card.Title>
             <Card.Img variant="middle" />
                 <Card.Body>
                    <Card.Text></Card.Text>  
                </Card.Body>
         </Card>  
         <h2 style={{textAlign: 'center'}}>Reviews</h2>
         <Container>
         <ul >
          <li style={{fontFamily: "monospace"}}>Review 1</li>
          <br />
          <li style={{fontFamily: "monospace"}}>Review 2</li>
          <br />
          <li style={{fontFamily: "monospace"}}>Review 3</li>
         </ul>
         </Container>
    </div>
  );
};

export default Home;
