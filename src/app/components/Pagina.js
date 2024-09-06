"use client";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
            <Nav.Link href="/array">Array</Nav.Link>
            <Nav.Link href="/objetos">Objetos</Nav.Link>
            <Nav.Link href="/nomes">Nomes</Nav.Link>
            <Nav.Link href="/numeros">Numeros</Nav.Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Disney"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/disney/cards">
                Disney Cards
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/disney/carrossel">
                Disney Carrossel
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/disney/tabela">
                Disney Tabela
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/disney">Disney Nomes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1>{props.titulo}</h1>
      </div>

      <Container>{props.children}</Container>
    </>
  );
}
