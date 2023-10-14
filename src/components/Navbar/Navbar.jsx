import "./Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';




const NavBar = () => {
  return(
<Navbar  expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand" as={Link} to="/">
          EcoSimuladores
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
            <Nav.Link className="nav-item nav-link" as={Link} to="/" >
              Inicio
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Dropdown>
      <Dropdown.Toggle className="products" id="dropdown-basic">
        Productos
      </Dropdown.Toggle>
      <Dropdown.Menu className="drop-menu">
        <Dropdown.Item >
      <Nav.Link as={Link} to="/category/simuladores">
              Simuladores
            </Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Nav.Link as={Link} to="/category/cursos">
             Cursos
            </Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Nav.Link as={Link} to="/products">
Todos
</Nav.Link>
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</Nav.Item>
</Nav>
<CartWidget></CartWidget>


</Navbar.Collapse>
</Container>
</Navbar>
        
    
      
  );
};

export default NavBar;
