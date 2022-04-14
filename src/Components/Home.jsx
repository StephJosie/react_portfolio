import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Home() {
    return (

        <div>
            <Container className="justify-content-center mt-5 pt-5">

                <Row className="justify-content-md-center">
                    <Col md={6}>

                        <Card className="border-0 justify-content-center">

                            <img className="w-25 p-4" src="./Logo/sjalogo.png" className="img" alt="black sja" />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="border-0">

                            <img className="w-25 p-4" src="./Logo/IMG_5699.jpg" className="img" alt="Me Smiling" />

                        </Card>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}
