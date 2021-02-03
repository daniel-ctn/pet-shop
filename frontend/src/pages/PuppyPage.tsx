import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Col, Row, Image, ListGroup, Button} from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";

import Rating from "../components/Rating";
import PuppyModel from "../models/puppies";

interface PuppyPageProps {
}

const PuppyPage: React.FC<PuppyPageProps> = ({}) => {
    const {id} = useParams<{ id?: string }>();
    const [puppy, setPuppy] = useState<PuppyModel>()

    useEffect(() => {
        axios.get(`/api/puppy/${id}`).then((data) => {
            setPuppy(data.data)
        })
    }, [id])

    return (
        <>
            <Link className="btn btn-dark mb-3" to="/">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={puppy?.image} alt={puppy?.name} style={{width: '100%'}} fluid/>
                </Col>
                <Col md={6}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h1 className="mt-2 text-primary text-monospace">{puppy?.name}</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={puppy?.rating} text={`${puppy?.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Price: <span className="text-info font-weight-bolder">${puppy?.price}</span></h3>
                            <h5>Status: <span
                                className={puppy?.countInStock! > 0 ? 'text-success' : 'text-danger'}>{puppy?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'}</span>
                            </h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{puppy?.description}</p>
                            <p>Origin: <span className="text-info">{puppy?.origin}</span><br/>
                            Temperament: <span className="text-info">{puppy?.temperament}</span></p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block btn-success mb-2" type="button"
                                    disabled={puppy?.countInStock! === 0}>
                                Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
};

export default PuppyPage;
