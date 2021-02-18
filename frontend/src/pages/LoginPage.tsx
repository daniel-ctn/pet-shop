import React, {useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import {Col, Container, Row} from "react-bootstrap";
import {TextField, Button} from "@material-ui/core";

import {Field, Form, Formik} from 'formik';
import * as yup from "yup";

import {RootState} from "../state/store";
import {login} from "../state/actionCreators/userActionCreator";
import Message from '../components/Message';
import Loader from "../components/Loader";

const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
});

const LoginPage: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {userInfo, error, loading} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if(userInfo?.name) history.push('/')
    },[userInfo, history])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <h2 className="font-weight-normal">SIGN IN</h2>
                    {error && <Message variant="danger">{error}</Message>}
                    {loading && <Loader/>}
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <Formik
                        validateOnChange={true}
                        initialValues={{email: '', password: ''}}
                        validationSchema={validationSchema}
                        onSubmit={(data) => {
                            dispatch(login(data.email, data.password))
                        }}
                    >
                        {({values, errors}) => (
                            <Form>
                                <Field placeholder="Email" name="email" type="input" as={TextField}
                                       fullWidth style={{margin: 10}} error={!!errors.email}
                                       helperText={errors.email}/>
                                <Field placeholder="Password" name="password" type="password"
                                       as={TextField} fullWidth style={{margin: 10}}
                                       error={!!errors.password} helperText={errors.password}/>
                                <Button variant="contained" color="primary" type="submit"
                                        style={{margin: 8}}>
                                    Sign In
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col xs={12} lg={6}>
                    New Customer? <Link to='/register'>Register</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
