import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUserDetails} from "../state/actionCreators/userActionCreator";
import {RootState} from "../state/store";
import {useHistory} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {Button, TextField} from "@material-ui/core";
import * as yup from "yup";
import Message from "../components/Message";
import Loader from "../components/Loader";

const validationSchema = yup.object({
    name: yup.string().required().max(20),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPw: yup.string().required('Confirm password is a required field')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const ProfilePage: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {userDetails, userInfo, error, loading} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if(userInfo) dispatch(getUserDetails(userInfo.token))
        else history.push('/login')
    }, [dispatch, userInfo, history])

    return (
        <Row className="justify-content-center">
            <Col xs={12} sm={4}>
                <h2 className="font-weight-normal">User Profile</h2>
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader/>}
                <Formik
                    validateOnChange={true}
                    initialValues={{
                        name: userDetails?.name,
                        email: userDetails?.email,
                        password: '',
                        confirmPw: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(data) => {
                        console.log(data)
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
                                Update
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Col>
            <Col xs={12} sm={8}>
                <h2 className="font-weight-normal">My Orders</h2>
            </Col>
        </Row>
    );
};

export default ProfilePage;
