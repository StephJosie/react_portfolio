import React from 'react';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

export default function About() {
    return (
        <div>
            {/* <Container>
                <Card className="text-center border-0 m-5">

                    <h1 className="card-title" id="aboutme">Hi... I'm Steph</h1>
                    <br />
                    <p className="card-text-center">My name is Stephanie Apodaca. I am a single mom to a wonderful 17 year old boy named Alec. I also have two rescue pits named Tesla Rosalind (named after Nikola Tesla and Rosalind Franklin) and Linus Musk (named after Linus Pauling and Elon Musk).  Currently I am employeed with Kaiser
                        Permanente in San Diego, CA.
                        I have been interested in accomplishing a coding bootcamp for a few years, recently I was given the
                        opportunity
                        to attend one.  I attended UCSD coding bootcamp, which is a full stack program. I have learned multiple different languages, my current favorite to work with is Reactjs. In my free time I enjoy photography and volunteering with my local dog rescue (<a href="https://www.itsthepits.org/"> It's The Pits </a>).</p>

                </Card>

            </Container> */}

            <Card className="border-0 text-center" >
                <Card.Body>
                    <Card.Title as="h1">Hi... I'm Steph</Card.Title>
                    <Container style={{ width: '50rem' }}>
                        <Card.Text className="text-center" md={5} >
                            <br />
                            My name is Stephanie Apodaca. I am a single mom to a wonderful 17 year old boy named Alec. I also have two rescue pits named Tesla Rosalind (named after Nikola Tesla and Rosalind Franklin) and Linus Musk (named after Linus Pauling and Elon Musk).  Currently I am employeed with Kaiser
                            Permanente in San Diego, CA.
                            I have been interested in accomplishing a coding bootcamp for a few years, recently I was given the
                            opportunity
                            to attend one.  I attended UCSD coding bootcamp, which is a full stack program. I have learned multiple different languages, my current favorite to work with is Reactjs. In my free time I enjoy photography and volunteering with my local dog rescue (<a href="https://www.itsthepits.org/"> It's The Pits </a>).

                        </Card.Text>
                    </Container>

                </Card.Body>
            </Card>

        </div>
    )
}
