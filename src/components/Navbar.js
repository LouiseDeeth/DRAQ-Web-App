import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg'; 
import '../App.css';

const NavigationBar = () => {
  return (
<Navbar className="custom-navbar" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="/">~</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
      <Nav.Link href="/Create" className="nav-link-custom">Create</Nav.Link>
      <Nav.Link href="/Read" className="nav-link-custom">Read</Nav.Link>
    </Nav>
  </Container>
</Navbar>

  );
};

export default NavigationBar;
