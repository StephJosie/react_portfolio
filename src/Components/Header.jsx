import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from 'react-bootstrap/Button'
// import Offcanvas from 'react-bootstrap/Offcanvas'
// import Figure from 'react-bootstrap/Figure'

// import { useState } from 'react'
export default function Header() {
    // const [open, setOpen] = useState(false);
    return (
        <div>
            {/* <Navbar bg="light" expand={false}>
                <Container fluid>

                    <Navbar.Brand href="#">
                        <Figure>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="sja pink bg"
                                src="./Logo/sjalogo.png"
                            />

                        </Figure>
                        
                    </Navbar.Brand>


                    <Button variant="dark">
                        <Navbar.Toggle aria-controls="offcanvasNavbar" className="box" />
                    </Button>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"

                        aria-labelledby="offcanvasNavbarLabel"
                        placement="right end"


                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Take A Look Around</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Button className="text-black border-0 " onClick={() => window.open(URL = "/", '_blank')}>Home</Button>
                                <Button className="text-black border-0 " onClick={() => window.open(URL = "/Projects", '_blank')}>Projects</Button>
                                <Button className="text-black border-0 " onClick={() => window.open(URL = "/Photography", '_blank')}>Photography</Button>
                            </Nav>




                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar> */}


            <Navbar bg="light" variant="light" sticky="top">
                <Container>

                    <Navbar.Brand href="#home">
                        {/* <Figure>
                            <Figure.Image
                                width={100}
                                height={20}
                                alt="sja pink bg"
                                src="./Logo/sjalogo.png"
                            />

                        </Figure> */}
                    </Navbar.Brand>
                    <Nav placement="right end">

                        <Button className="text-black border-0 " onClick={() => window.open(URL = "/", '_blank')}>Home</Button>
                        <Button className="text-black border-0 " onClick={() => window.open(URL = "/About", '_blank')}>About</Button>
                        <Button className="text-black border-0 " onClick={() => window.open(URL = "/Projects", '_blank')}>Projects</Button>
                        <Button className="text-black border-0" onClick={() => window.open(URL = "/Photography", '_blank')}>Photography</Button>
                    </Nav>

                </Container>
            </Navbar>
            <br />
            <br />

        </div>
    )
}
