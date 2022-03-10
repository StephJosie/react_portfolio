import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div>



            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Stephanie Apodaca</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
