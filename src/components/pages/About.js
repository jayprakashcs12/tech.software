import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const About = () => {

    useEffect(()=> {
        document.title = "About Us";
    })

    return (

        <React.Fragment>
            <Container className='pro-container'>
                <h1 className='pro-head'>About</h1>
            </Container>
        </React.Fragment>
    )
}

export default About;