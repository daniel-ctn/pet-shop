import React, {useEffect, useRef} from 'react'
import {Field} from "formik";
import {TextField} from "@material-ui/core";
import {Col, Container, Form, Row} from "react-bootstrap";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {RootState} from "../state/store";
import {ShippingInfoModel} from '../models/cart';
import {saveShippingAddress} from "../state/actionCreators";
import {FormikStep, FormikStepper} from "../components/Stepper";

const ShippingPage: React.FC = () => {
    const isCancelled = useRef(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const {shippingInfo} = useSelector((state: RootState) => state.cart)
    const {userInfo} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (!userInfo?.name && !isCancelled.current) history.push('/login/redirect=shipping')

        return () => {
            isCancelled.current = true
        }
    }, [userInfo, history])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <h2 className="font-weight-normal">Shipping Information</h2>
                    <FormikStepper
                        validateOnChange={false}
                        validateOnBlur={true}
                        initialValues={{
                            address: shippingInfo?.address || '',
                            city: shippingInfo?.city || '',
                            postalCode: shippingInfo?.postalCode || '',
                            country: shippingInfo?.country || '',
                            paymentMethod: shippingInfo?.paymentMethod || 'Paypal'
                        }}
                        onSubmit={async (data, helpers) => {
                            const shippingInfo: ShippingInfoModel = {
                                address: data.address,
                                city: data.city,
                                postalCode: +data.postalCode,
                                country: data.country,
                                paymentMethod: data.paymentMethod
                            }
                            if(!isCancelled.current) {
                                await dispatch(saveShippingAddress(shippingInfo))
                                history.push('/placeorder')
                            }
                        }}
                    >
                        <FormikStep label="Shipping"
                                    validationSchema={yup.object({
                                        address: yup.string().required().max(50),
                                        city: yup.string().required().max(30),
                                    })}
                        >
                            <Field label="Address" name="address" type="input" as={TextField}
                                   fullWidth style={{margin: 10}}/>
                            <Field label="City" name="city" type="input" as={TextField}
                                   fullWidth style={{margin: 10}}/>
                            <Field label="Postal Code" name="postalCode" type="number"
                                   as={TextField} fullWidth style={{margin: 10}}/>
                            <Field label="Country" name="country" type="input"
                                   as={TextField} fullWidth style={{margin: 10}}/>
                        </FormikStep>

                        <FormikStep label="Payment">
                            <Form.Label>Payment Method: </Form.Label>
                            <Form.Group>
                                <Field name="paymentMethod" type="radio" label="Paypal" id={1}
                                       as={Form.Check} value="Paypal" inline/>
                                <Field name="paymentMethod" type="radio" label="Credit Card" id={2}
                                       as={Form.Check} value="Credit Card" inline/>
                                <Field name="paymentMethod" type="radio" label="Stripe" id={3}
                                       as={Form.Check} value="Stripe" inline/>
                                <Field name="paymentMethod" type="radio" label="Cash" id={4}
                                       as={Form.Check} value="Cash" inline/>
                            </Form.Group>

                        </FormikStep>
                    </FormikStepper>
                </Col>
            </Row>
        </Container>
    );
};

export default ShippingPage;
