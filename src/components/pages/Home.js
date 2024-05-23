import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {

    useEffect(()=> {
        document.title = "Home";
    })

    return (

        <React.Fragment>
            <Container className='pro-container'>
                <h1 className='pro-head'>Home</h1>
            </Container>
        </React.Fragment>
    )
}

export default Home;