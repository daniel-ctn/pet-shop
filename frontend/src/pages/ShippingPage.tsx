import React, {useEffect} from 'react'
import {Field, Form, Formik} from "formik";
import {Button, TextField} from "@material-ui/core";
import {Col, Container, Row} from "react-bootstrap";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../state/store";
import { ShippingInfoModel } from '../models/cart';
import {saveShippingAddress} from "../state/actionCreators";
import {useHistory} from "react-router-dom";

const validationSchema = yup.object({
    address: yup.string().required().max(50),
    city: yup.string().required().max(30),
    postalCode: yup.string().required().min(4)
});

const ShippingPage: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {shippingInfo} = useSelector((state: RootState) => state.cart)
    const {userInfo} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if(!userInfo?.name) history.push('/login/redirect=shipping')
    }, [userInfo, history])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <h2 className="font-weight-normal">Shipping Information</h2>
                    <Formik
                        validateOnChange={false}
                        validateOnBlur={true}
                        initialValues={{
                            address: shippingInfo?.address || '',
                            city: shippingInfo?.city || '',
                            postalCode: shippingInfo?.postalCode || '',
                            country: shippingInfo?.country || ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (data) => {
                            const shippingInfo: ShippingInfoModel = {
                                address: data.address,
                                city: data.city,
                                postalCode: +data.postalCode,
                                country: data.country
                            }
                            await dispatch(saveShippingAddress(shippingInfo))
                            history.push('/payment')
                        }}
                    >
                        {({values, errors}) => (
                            <Form>
                                <Field placeholder="Address" name="address" type="input" as={TextField}
                                       fullWidth style={{margin: 10}} error={!!errors.address}
                                       helperText={errors.address}/>
                                <Field placeholder="City" name="city" type="input" as={TextField}
                                       fullWidth style={{margin: 10}} error={!!errors.city}
                                       helperText={errors.city}/>
                                <Field placeholder="Postal Code" name="postalCode" type="input"
                                       as={TextField} fullWidth style={{margin: 10}}
                                       error={!!errors.postalCode} helperText={errors.postalCode}/>
                                <Field placeholder="Country" name="country" type="input"
                                       as={TextField} fullWidth style={{margin: 10}}/>
                                <Button variant="contained" color="primary" type="submit"
                                        style={{margin: 8}}>
                                    Continue
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default ShippingPage;
