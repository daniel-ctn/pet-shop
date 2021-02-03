import React from 'react'
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

import PuppyModel from "../models/puppies";
import Rating from "./Rating";

interface PuppyProps {
    puppy: PuppyModel
}

const Puppy: React.FC<PuppyProps> = ({puppy}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/puppy/${puppy._id}`}>
                <Card.Img src={puppy.image} variant="top"/>
            </Link>

            <Card.Body>
                <Link to={`/puppy/${puppy._id}`}>
                    <Card.Title as="div">
                        <strong>{puppy.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={puppy.rating} text={`${puppy.numReviews} reviews`}/>
                    </div>
                </Card.Text>

                <Card.Text as="h3">${puppy.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Puppy;
