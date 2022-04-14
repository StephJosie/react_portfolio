import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import Figure from 'react-bootstrap/Figure'

export default function Home() {
    return (

        <div>
            <Container className="justify-content-center mt-5 pt-5">

                <Row className="justify-content-md-center">
                    <Col md={6}>
                        {/* <div className="card text-center border-0"> */}
                        <Card className="border-0 justify-content-center">
                            {/* <Card.Body className="card-body">
                                    <h1 className="card-title" id="aboutme">Hi... I'm Steph</h1>
                                    <p className="card-text-center">My name is Stephanie Apodaca. I am a single mom to a wonderful 17 year old boy named Alec.  Currently I am employeed with Kaiser
                                        Permanente, San Diego.
                                        I have been interested in accomplishing a coding bootcamp for a few years, I was recently given the
                                        opportunity
                                        to attend one.  I attended UCSD coding boot camp, which is a full stack program. I have learned multiple different languages, my current favorite to work with is Reactjs. I enjoy photography and dog rescue. I look forward to improving on my portfolio.</p>
                                </Card.Body> */}
                            {/* <h4>Check out my work!</h4> */}

                            {/* <Button className="text-black border-0 " onClick={() => window.open(URL = "/Projects", '_blank')}> */}
                            <img className="w-25 p-4" src="./Logo/sjalogo.png" className="img" alt="black sja" />
                            {/* <Figure>
                                        <Figure.Image
                                            width={150}
                                            height={150}
                                            alt="sja pink bg"
                                            src="./Logo/sjalogo.png"
                                        />

                                    </Figure> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
                                        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                                    </svg> */}
                            {/* </Button> */}
                        </Card>
                        {/* </div> */}

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
