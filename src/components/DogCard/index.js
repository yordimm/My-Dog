import React from 'react';
import PropTypes from 'prop-types';

const DogCard = ({ image, name }) => {
    return (
        <div className="card">
            <img className="card-img-top h-100" src={image} alt="Card image cap" />
            <div className="card-body"> <p className="breed">{name ? name : ''}</p></div>
        </div>
    );
}

DogCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}
export default DogCard;
