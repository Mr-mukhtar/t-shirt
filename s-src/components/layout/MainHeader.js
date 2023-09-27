// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom'; // Fix import
// import { Container, Nav, Navbar } from 'react-bootstrap';

// const MainNavigation = (props) => {
//   const location = useLocation();

//   const isStoreRoute = () => {
//     return location.pathname === '/store';
//   };

//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" fixed="top">
//         <Container>
//           <Nav className="mx-auto">
//             <NavLink to="/home" className="nav-link mx-5">
//               HOME
//             </NavLink>

//             <NavLink to="/store" className="nav-link mx-5">
//               STORE
//             </NavLink>

//             <NavLink to="/about" className="nav-link mx-5">
//               ABOUT
//             </NavLink>
//           </Nav>

//           {isStoreRoute() && <p>Cart</p>}
//         </Container>
//       </Navbar>
//       <br />
//     </header>
//   );
// };

// export default MainNavigation;


import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Or right-aligned</p>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;