import React from 'react'

import {Col, Row} from 'react-bootstrap';
import puppies from "../puppies";
import Puppy from "../components/Puppy";

interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = ({}) => {
    return (
        <>
            <h5>LATEST PUPPIES</h5>
            <Row>
                {puppies.map(puppy => {
                    return <Col sm={12} md={6} lg={4} xl={3} key={puppy._id}>
                        <Puppy puppy={puppy}/>
                    </Col>
                })}
            </Row>
        </>
    );
};

export default HomePage;
