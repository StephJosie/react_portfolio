import React from 'react'
import Header from '../../Components/Header'
import Projects from '../../Components/Projects'
import Contact from '../../Components/Contact'
import Container from "react-bootstrap/Container"

export default function Projects() {
    return (
        <div>
            <Header />
            <Container>
                <Projects />
            </Container>
            <Contact />
        </div>
    )
}
