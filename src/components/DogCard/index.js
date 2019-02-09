import React from 'react';
import PropTypes from 'prop-types';

const DogCard = ({ image, name }) => {
    return (
        <div className="m-3 animated fadeIn fast">
            <img className="dogImage" src={image} alt={'name'} />
            <div className="text-center">
                <h5 className="card-title">{name ? name : ''}</h5>
            </div>
        </div>
    );
}

DogCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}
export default DogCard;
