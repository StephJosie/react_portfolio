import React from 'react'
import { Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col">
                        <div className="card text-center border-0">
                            <div className="card-body">
                                <h1 className="card-title">Hi... I'm Steph!</h1>
                                <p className="card-text">I am a brand new web designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card border-0">
                            <img src="./Logo/IMG_5699.jpg" className="img" alt="Me Smiling" />
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
