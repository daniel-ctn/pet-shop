import React, {useEffect, useState} from 'react'
import {Col, ListGroup, Row, Image, Card, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import Message from "../components/Message";
import {Link, useHistory} from 'react-router-dom';
import {createOrder} from "../state/actionCreators";
import {PricesModel, ShippingInfoModel} from "../models/cart";

const PlaceOrderPage: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [prices, setPrices] = useState<PricesModel>({itemsPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0})
    const {shippingInfo, cartItems, orderSuccess, order} = useSelector((state: RootState) => state.cart)
    const {userInfo} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if(orderSuccess) history.push(`order/${order?._id}`)
    }, [orderSuccess, order, history])

    useEffect(() => {
        if(cartItems.length !== 0) {
            const itemsPrice = cartItems.reduce((acc, cur) => acc + cur.puppy.price * cur.qty, 0)
            const shippingPrice = itemsPrice > 1000 ? 0 : 50
            const taxPrice = 0.15 * itemsPrice
            const totalPrice = itemsPrice + shippingPrice + taxPrice

            setPrices({itemsPrice, taxPrice, shippingPrice, totalPrice})
        }
    }, [cartItems])

    const placeOrderHandler = () => {
        const defaultInfo: ShippingInfoModel = {
            address: shippingInfo?.address || '',
            city: shippingInfo?.city || '',
            postalCode: shippingInfo?.postalCode || 0,
            country: shippingInfo?.country || '',
            paymentMethod: shippingInfo?.paymentMethod || 'Paypal'
        }
        dispatch(createOrder(shippingInfo || defaultInfo, cartItems, prices, userInfo?.token || ''))
    }

    return (
        <>
            <Row>
                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>Shipping</h3>
                            <strong>Shipping Address: </strong>
                            {shippingInfo?.address}, {shippingInfo?.city} {shippingInfo?.postalCode} {shippingInfo?.city}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Payment</h3>
                            <strong>Payment Method: </strong>
                            {shippingInfo?.paymentMethod}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Order Items</h3>
                            {cartItems.length === 0 ?
                                <Message variant="flush">Your cart is empty</Message> :
                                (<ListGroup variant="flush">
                                    {cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.puppy.image} alt={item.puppy.name} fluid rounded/>
                                                </Col>
                                                <Col>
                                                    <Link to={`/puppy/${item.puppy._id}`}>
                                                        {item.puppy.name}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x ${item.puppy.price} = ${item.qty * item.puppy.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>)}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>Order Summary</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${prices.itemsPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>{prices.shippingPrice !== 0 ? `$${prices.shippingPrice.toFixed(2)}` : 'Free'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${prices.taxPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${prices.totalPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type="button" className="btn-block" onClick={placeOrderHandler}>
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default PlaceOrderPage;
