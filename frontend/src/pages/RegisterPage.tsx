import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {TextField, Button} from "@material-ui/core";
import {Field, Form, Formik} from 'formik';
import * as yup from "yup";

import {RootState} from "../state/store";
import Message from '../components/Message';
import Loader from "../components/Loader";
import {register} from "../state/actionCreators/userActionCreator";

const validationSchema = yup.object({
    name: yup.string().required().max(20),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPw: yup.string().required('Confirm password is a required field')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const RegisterPage: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {userInfo, error, loading} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (userInfo?.name) history.push('/')
    }, [userInfo, history])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <h2 className="font-weight-normal">Register New User</h2>
                    {error && <Message variant="danger">{error}</Message>}
                    {loading && <Loader/>}
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <Formik
                        validateOnChange={true}
                        initialValues={{name: '', email: '', password: '', confirmPw: ''}}
                        validationSchema={validationSchema}
                        onSubmit={(data) => {
                            dispatch(register(data.name, data.email, data.password))
                        }}
                    >
                        {({values, errors}) => (
                            <Form>
                                <Field placeholder="Name" name="name" type="input" as={TextField}
                                       fullWidth style={{margin: 10}} error={!!errors.name}
                                       helperText={errors.name}/>
                                <Field placeholder="Email" name="email" type="input" as={TextField}
                                       fullWidth style={{margin: 10}} error={!!errors.email}
                                       helperText={errors.email}/>
                                <Field placeholder="Password" name="password" type="password"
                                       as={TextField} fullWidth style={{margin: 10}}
                                       error={!!errors.password} helperText={errors.password}/>
                                <Field placeholder="Confirm Password" name="confirmPw" type="password"
                                       as={TextField} fullWidth style={{margin: 10}}
                                       error={!!errors.confirmPw} helperText={errors.confirmPw}/>
                                <Button variant="contained" color="primary" type="submit"
                                        style={{margin: 8}}>
                                    Register
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;
