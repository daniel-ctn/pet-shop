import React from 'react'
import {Col, Row, Image, ListGroup, Button} from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";

import puppies from "../puppies";
import Rating from "../components/Rating";

interface PuppyPageProps {
}

const PuppyPage: React.FC<PuppyPageProps> = ({}) => {
    const {id} = useParams<{ id?: string }>();
    const puppy = puppies.find(p => p._id === id)

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={puppy?.image} alt={puppy?.name} style={{width: '100%'}} fluid/>
                </Col>
                <Col md={6}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h1>{puppy?.name}</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={puppy?.rating} text={`${puppy?.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Price: ${puppy?.price}</h3>
                            <h5>Status: {puppy?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{puppy?.description}</p>
                            <h5>Origin: {puppy?.origin}</h5>
                            <h5>Temperament: {puppy?.temperament}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={puppy?.countInStock! === 0}>
                                Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
};

export default PuppyPage;
