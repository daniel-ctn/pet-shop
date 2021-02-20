import React, {ChangeEvent, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import {Col, ListGroup, Row, Image, Form, Button, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import {RootState} from "../state/store";
import {addItemToCart, removeCartItem} from '../state/actionCreators/cartActionCreator';
import Message from "../components/Message";
import {CartModel} from "../models/cart";

const CartPage: React.FC = () => {
    const {id} = useParams<{ id: string | undefined }>();
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const {cartItems} = useSelector((state: RootState) => state.cart)

    useEffect(() => {
        const qty: number = location.search ? +location.search.split('=')[1] : 1
        if (id) {
            dispatch(addItemToCart(id, qty))
        }
    }, [id, location, dispatch])

    const removeItem = (id: string) => {
        dispatch(removeCartItem(id))
    }

    const onChangeHandler = (event: ChangeEvent<any>, model: CartModel) => {
        dispatch(addItemToCart(model.puppy._id, +event.target.value))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1 className="shopping-cart-head font-weight-normal">Shopping Cart</h1>
                {cartItems.length === 0
                    ? (<Message variant="secondary">Your cart is empty <Link to="/">Go Back</Link></Message>)
                    : (<ListGroup variant="flush">
                        {cartItems.map(i => (
                            <ListGroup.Item key={i.puppy._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={i.puppy.image} fluid rounded/>
                                    </Col>
                                    <Col md={4}>
                                        <Link to={`/puppy/${i.puppy._id}`}>{i.puppy.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${i.puppy.price}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control as="select" value={i.qty}
                                                      onChange={(e) => onChangeHandler(e, i)}>
                                            {[...Array(i.puppy.countInStock).keys()].map(k =>
                                                <option key={k + 1} value={k + 1}>{k + 1}</option>
                                            )}
                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button type="button" variant="danger" onClick={() => removeItem(i.puppy._id)}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>)}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2 className="sub-total">
                                Subtotal ({cartItems.reduce((acc: number, cur: CartModel) => acc + cur.qty, 0)})
                                Puppies</h2>
                            <h4 className="text-primary font-weight-normal">
                                ${cartItems.reduce((acc: number, cur: CartModel) => acc + cur.qty * cur.puppy.price, 0).toFixed(2)}
                            </h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" variant="success"
                                    disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Proceed to Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartPage;
