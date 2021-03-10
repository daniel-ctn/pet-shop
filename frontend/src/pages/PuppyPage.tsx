import React, {useEffect, useState} from 'react'
import {Col, Row, Image, ListGroup, Button, Form} from 'react-bootstrap';
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Rating from "../components/Rating";
import {RootState} from '../state/store';
import {requestSinglePuppy} from '../state/actionCreators/puppyActionCreator';
import Loader from "../components/Loader";
import Message from "../components/Message";

const PuppyPage: React.FC = () => {
    const [qty, setQty] = useState<number>(1)
    const history = useHistory();
    const {id} = useParams<{ id: string | undefined }>();
    const dispatch = useDispatch()
    const {currentPuppy, loading, error} = useSelector((state: RootState) => state.puppy)

    useEffect(() => {
        if (id) dispatch(requestSinglePuppy(id))
    }, [id, dispatch])

    const addToCartHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault()
        history.push(`/cart/${id}?qty=${qty}`)
    }

    return (
        <>
            <Link className="btn btn-outline-primary mb-3" to="/">Go Back</Link>
            {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : (
                <Row>
                    <Col md={6}>
                        <Image src={currentPuppy?.image} alt={currentPuppy?.name} style={{width: '100%'}} fluid/>
                    </Col>
                    <Col md={6}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2 className="mt-2 text-primary text-monospace font-weight-bold">{currentPuppy?.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={currentPuppy?.rating} text={`${currentPuppy?.numReviews} reviews`}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Price: <span
                                    className="text-warning font-weight-bolder">${currentPuppy?.price}</span></h3>
                                <h5>Status: <span
                                    className={currentPuppy?.countInStock! > 0 ? 'text-success' : 'text-danger'}>
                                    {currentPuppy?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'}</span>
                                </h5>
                            </ListGroup.Item>

                            {currentPuppy?.countInStock! > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={3} lg={2}>Quantity</Col>
                                        <Col xs={4} lg={4}>
                                            <Form.Control as="select" value={qty}
                                                          onChange={event => setQty(+event.target.value)}>
                                                {[...Array(currentPuppy?.countInStock!).keys()].map(k =>
                                                    <option key={k + 1} value={k + 1}>{k + 1}</option>
                                                )}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <p>{currentPuppy?.description}</p>
                                <p>Origin: <span className="text-primary font-weight-normal">{currentPuppy?.origin}</span><br/>
                                    Temperament: <span
                                        className="text-primary font-weight-normal">{currentPuppy?.temperament}</span></p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block btn-danger mb-2" type="button"
                                        disabled={currentPuppy?.countInStock! === 0}
                                        onClick={addToCartHandler}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default PuppyPage;
