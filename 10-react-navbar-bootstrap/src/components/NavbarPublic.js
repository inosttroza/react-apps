import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';


function NavbarPublic({ login }) {

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
                                </Nav>

                                <Button variant="success" onClick={login}>Login</Button>
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>Not found</h1>} />
                </Routes>

            </Router>
        </>
    )
}

export default NavbarPublic