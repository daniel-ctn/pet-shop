import React from 'react'
import {faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface RatingProps {
    value?: number;
    text?: string;
    color?: string;
}

const Rating: React.FC<RatingProps> = ({value= 1, text= '', color = 'orange'}) => {
    return (
        <div className="rating">
            <span>{value >= 1 ? <FontAwesomeIcon icon={faStar} color={color}/> : value >= 0.5 ?
                <FontAwesomeIcon icon={faStarHalf} color={color}/> : null}</span>

            <span>{value >= 2 ? <FontAwesomeIcon icon={faStar} color={color}/> : value >= 1.5 ?
                <FontAwesomeIcon icon={faStarHalf} color={color}/> : null}</span>

            <span>{value >= 3 ? <FontAwesomeIcon icon={faStar} color={color}/> : value >= 2.5 ?
                <FontAwesomeIcon icon={faStarHalf} color={color}/> : null}</span>

            <span>{value >= 4 ? <FontAwesomeIcon icon={faStar} color={color}/> : value >= 3.5 ?
                <FontAwesomeIcon icon={faStarHalf} color={color}/> : null}</span>

            <span>{value >= 5 ? <FontAwesomeIcon icon={faStar} color={color}/> : value >= 4.5 ?
                <FontAwesomeIcon icon={faStarHalf} color={color}/> : null}</span>

            <span className="ml-1">{text}</span>
        </div>
    );
}

export default Rating;
