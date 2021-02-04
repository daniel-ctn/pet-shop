import React, {useEffect} from 'react'
import {Col, Row} from 'react-bootstrap';

import Puppy from "../components/Puppy";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import {requestPuppyList} from "../state/actionCreator";
import Loader from '../components/Loader';
import Message from "../components/Message";

const HomePage: React.FC = () => {
    const dispatch = useDispatch()
    const {puppies, loading, error} = useSelector((state:RootState) => state.puppy)

    useEffect(() => {
        dispatch(requestPuppyList())
    }, [dispatch])

    return (
        <>
            <h5>LATEST PUPPIES</h5>
            {loading ? <Loader/> : error ? <Message variant="danger"/> : (
                <Row>
                    {puppies?.map(puppy => {
                        return <Col sm={12} md={6} lg={4} xl={3} key={puppy._id}>
                            <Puppy puppy={puppy}/>
                        </Col>
                    })}
                </Row>
            )}
        </>
    );
};

export default HomePage;
