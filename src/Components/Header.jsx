import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from 'react-bootstrap/Button'

export default function Header() {

    return (
        <div>



            <Navbar bg="light" variant="light" sticky="top">
                <Container>

                    <Navbar.Brand href="#home">

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
