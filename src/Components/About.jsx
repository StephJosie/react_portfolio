import React from 'react';
import Container from "react-bootstrap/Container";

export default function About() {
    return (
        <div>
            <Container>

                <div className="row">
                    <div className="col">
                        <div className="card text-center border-0">
                            <div className="card-body">
                                <h1 className="card-title" id="aboutme">About Me</h1>
                                <p className="card-text-center">My name is Stephanie Apodaca. I am a single mom and currently work for Kaiser
                                    Permanente, San Diego.
                                    I have been interested in accomplishing a coding bootcamp for a few years, I was recently given the
                                    opportunity
                                    to attend one. I enjoy photography and dog rescue. I look forward to improving on my portfolio.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>

        </div>
    )
}
