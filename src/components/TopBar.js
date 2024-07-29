import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Assignment 1</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Registration</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Sections" id="navbarScrollingDropdown">
              <Nav.Link href="/programmes">Programmes</Nav.Link>
              <Nav.Link href="/studentlist">Students</Nav.Link>
              <Nav.Link href="/lecturers">Lecturers</Nav.Link>
              <Nav.Link href="/attendancelist">Attendance</Nav.Link>
              <Nav.Link href="/studentmark">Student Marks</Nav.Link>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
