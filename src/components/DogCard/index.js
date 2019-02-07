import React from 'react';
import PropTypes from 'prop-types';

const DogCard = ({ image, name }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body"> {name ? name : 'Some more card content'}</div>
        </div>
    );
}

DogCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}
export default DogCard;
