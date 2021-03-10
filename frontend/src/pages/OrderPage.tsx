import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOrder, payOrder} from "../state/actionCreators";
import {RootState} from "../state/store";
import {Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import Message from "../components/Message";
import axios from "axios";
import {PayPalButton} from "react-paypal-button-v2";

const OrderPage: React.FC = () => {
    const [sdkReady, setSdkReady] = useState(false)
    let {id} = useParams<{ id: string | undefined }>()
    const dispatch = useDispatch()
    const {order, paySuccess} = useSelector((state: RootState) => state.cart)

    useEffect(() => {
        const addPaypalScript = async () => {
            const {data: clientId} = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => setSdkReady(true)
            document.body.appendChild(script)
        }

        if ((!order || paySuccess) && id) dispatch(getOrder(id))
        else if (!order?.isPaid) {
            // @ts-ignore
            if (!window.paypal) addPaypalScript()
            else setSdkReady(true)
        }
    }, [id, dispatch, order, paySuccess])

    return (
        <>
            <h4>Order ID: {id}</h4>
            <Row>
                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h4>Shipping</h4>
                            {/*put user info here*/}
                            <p>
                                <strong>Shipping Address: </strong>
                                {order?.shippingAddress.address}, {order?.shippingAddress.city} {order?.shippingAddress.postalCode} {order?.shippingAddress.city}
                            </p>
                            {order?.isDelivered ?
                                <Message variant="success">Delivered on {order.deliveredAt}</Message> :
                                <Message variant="warning">Not delivered</Message>
                            }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Payment</h4>
                            <p>
                                <strong>Payment Method: </strong>
                                {order?.paymentMethod}
                            </p>
                            {order?.isPaid ?
                                <Message variant="success">Paid on {order.paidAt}</Message> :
                                <Message variant="warning">Not paid</Message>
                            }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Order Items</h4>
                            {order?.orderItems.length === 0 ?
                                <Message variant="flush">Your cart is empty</Message> :
                                (<ListGroup variant="flush">
                                    {order?.orderItems.map((item, index) => (
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
                                <h4>Order Summary</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${order?.prices.itemsPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>{order?.prices.shippingPrice !== 0 ? `$${order?.prices.shippingPrice.toFixed(2)}` : 'Free'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${order?.prices.taxPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${order?.prices.totalPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            {!order?.isPaid && (
                                <ListGroup.Item>
                                    <PayPalButton
                                        amount={order?.prices.totalPrice}
                                        onSuccess={(paymentResult) => {
                                            console.log(paymentResult)
                                            dispatch(payOrder(paymentResult, id || '', ''))
                                        }}
                                    />
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default OrderPage;
