import React, {useEffect, useState} from 'react'

import {Col, Row} from 'react-bootstrap';
import axios from "axios";

import Puppy from "../components/Puppy";
import PuppyModel from "../models/puppies";

interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = ({}) => {
    const [puppies, setPuppies] = useState<PuppyModel[]>([])

    useEffect(() => {
        axios.get('/api/puppies').then((data) => {
            setPuppies(data.data)
        })
    }, [])

    return (
        <>
            <h5>LATEST PUPPIES</h5>
            <Row>
                {puppies?.map(puppy => {
                    return <Col sm={12} md={6} lg={4} xl={3} key={puppy._id}>
                        <Puppy puppy={puppy}/>
                    </Col>
                })}
            </Row>
        </>
    );
};

export default HomePage;
