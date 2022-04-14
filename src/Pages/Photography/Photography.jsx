import React from 'react'
import { Container } from 'react-bootstrap'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Photography from '../../Components/Photography'


export default function Photography() {
    return (
        <div>
            <Header />
            <Container>
                <Photography />
            </Container>
            <Contact />
            <Footer />
        </div>
    )
}
