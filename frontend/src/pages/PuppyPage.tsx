import React, {useEffect} from 'react'
import {Col, Row, Image, ListGroup, Button} from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";

import Rating from "../components/Rating";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../state/store';
import {requestSinglePuppy} from '../state/actionCreator';
import Loader from "../components/Loader";
import Message from "../components/Message";

const PuppyPage: React.FC = () => {
    const {id} = useParams<{ id?: string }>();
    const dispatch = useDispatch()
    const {currentPuppy, loading, error} = useSelector((state: RootState) => state.puppy)

    useEffect(() => {
        if (id) dispatch(requestSinglePuppy(id))
    }, [id, dispatch])

    return (
        <>
            <Link className="btn btn-dark mb-3" to="/">Go Back</Link>
            {loading ? <Loader/> : error ? <Message variant="danger"/> : (
                <Row>
                    <Col md={6}>
                        <Image src={currentPuppy?.image} alt={currentPuppy?.name} style={{width: '100%'}} fluid/>
                    </Col>
                    <Col md={6}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h1 className="mt-2 text-primary text-monospace">{currentPuppy?.name}</h1>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={currentPuppy?.rating} text={`${currentPuppy?.numReviews} reviews`}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Price: <span className="text-info font-weight-bolder">${currentPuppy?.price}</span>
                                </h3>
                                <h5>Status: <span
                                    className={currentPuppy?.countInStock! > 0 ? 'text-success' : 'text-danger'}>{currentPuppy?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'}</span>
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>{currentPuppy?.description}</p>
                                <p>Origin: <span className="text-info">{currentPuppy?.origin}</span><br/>
                                    Temperament: <span className="text-info">{currentPuppy?.temperament}</span></p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block btn-success mb-2" type="button"
                                        disabled={currentPuppy?.countInStock! === 0}>
                                    Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default PuppyPage;
