import React from 'react'
import Header from '../../Components/Header'
import Home from '../../Components/Home'
import Contact from '../../Components/Contact'
import Container from "react-bootstrap/Container"
import Footer from '../../Components/Footer'
export default function Home() {
    return (
        <div>
            <Header />
            <Container>
                <Home />
            </Container>
            <Contact />
            <Footer />

        </div>
    )
}
