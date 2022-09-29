import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Action1 from '../pages/Action1';


function NavbarPrivate({ logout }) {

    const expand = "lg"
    return (
        <>
            <Router>
                {/* {[false, 'sm', 'md', 'c', 'xl', 'xxl'].map((expand) => ( */}
                <Navbar bg="dark" variant={"dark"} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">Navbar Ino</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Ino
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/" >Home</Nav.Link>
                                    <Nav.Link href="/about" onClick={(e)=> e.preventDefault}>About</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                    <Nav.Link href="#" disabled>Otro</Nav.Link>
                                    <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                                        <NavDropdown.Item href="/action1">Action1</NavDropdown.Item>
                                        <NavDropdown.Item href="/action2">Action2</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/action3">Action3</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                                {/* <Form className="d-flex">
                                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                                <Button variant="danger" onClick={logout}>Logout</Button>
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/action1" element={<Action1 />} />
                    <Route path="*" element={<h1>Not found</h1>} />
                </Routes>

            </Router>
        </>
    )
}

export default NavbarPrivate